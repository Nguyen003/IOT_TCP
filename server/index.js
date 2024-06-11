const express = require('express');
const app = express();
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { handleWhenDeviceOutConnection, sendDataToAllClients } = require('./tcp-v2');
const net = require('net');
const { EVENTS_FROM_WEB } = require('./events');

const PORT_TCP = process.env.PORT_TCP || 100;
const PORT = process.env.PORT_APP || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//open cors for FE connect socket
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.get('/', function (req, res) {
  const { type } = req.body;
  res.status(200).json({ msg: msg || 'hello world' });
});

const server = createServer(app);

server.listen(PORT, () => console.log(`Lisening Server on port `, PORT));

const VALUE_OF_LIGHT_1 = {
  // ON: '#10010010', // trung nhau
  // OFF: '01',
  ON: '#00000010',
  OFF: '#00000000',
};

const VALUE_OF_LIGHT_2 = {
  ON: '#10010010',
  OFF: '10',
};

const ValueOfAllLights = {
  LIGHT_1: {
    allValues: [VALUE_OF_LIGHT_1.ON, VALUE_OF_LIGHT_1.OFF],
    currentValue: null,
  },
  LIGHT_2: {
    allValues: [VALUE_OF_LIGHT_2.ON, VALUE_OF_LIGHT_2.OFF],
    currentValue: null,
  },
};

let TcpConnections = [];
// Socket
const io = new Server(server);
io.on('connection', (socket) => {
  console.log('a user connected from socket.io');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('ON_OFF_LIGHT', (value) => {
    console.log('ON_OFF_LIGHT: ', value);
    sendDataToAllClients(value, TcpConnections);
  });

  socket.on(EVENTS_FROM_WEB.GET_INIT_VALUE_FROM_LIGHT, () => {
    console.log('GET_INIT_VALUE_FROM_LIGHT: ');
    const valueToEmit = {
      LIGHT_1: ValueOfAllLights.LIGHT_1.currentValue,
      LIGHT_2: ValueOfAllLights.LIGHT_2.currentValue,
    };
    console.log('gia tri tu web', valueToEmit);
    io.emit(EVENTS_FROM_WEB.GET_INIT_VALUE_FROM_LIGHT, valueToEmit);
  });
});

// TCP
const serverTCP = net.createServer((socket) => {
  TcpConnections.push(socket);

  socket.on('data', (data) => {
    // console.log(data.toString('hex').trim(), 'a')// '#00000010  a'
    const parseData = data.toString().substr(0, 9);
    // console.log(ValueOfAllLights.LIGHT_1.allValues.includes(parseData));
    // var fb1 = new Buffer(parseData);
    // var fb2 = new Buffer(VALUE_OF_LIGHT_1.ON);

    if (ValueOfAllLights.LIGHT_1.allValues.includes(parseData)) {
      console.log('den 1')
      ValueOfAllLights.LIGHT_1.currentValue = parseData;
      const valueToEmit = {
        type: 'LIGHT_1',
        currentValue: parseData,
      };
      io.emit(EVENTS_FROM_WEB.ON_OFF_LIGHT, valueToEmit);
    }

    if (ValueOfAllLights.LIGHT_2.allValues.includes(parseData)) {
      console.log('den 2')

      ValueOfAllLights.LIGHT_2.currentValue = parseData;
      const valueToEmit = {
        type: 'LIGHT_2',
        currentValue: parseData,
      };
      io.emit(EVENTS_FROM_WEB.ON_OFF_LIGHT, valueToEmit);
    }

    console.log('received data from device:', data.toString());
  });

  socket.on('error', function (error) {
    console.log('error:', error);
  });

  socket.on('end', handleWhenDeviceOutConnection);
});

serverTCP.on('connection', function () {
  console.log('A device connected to server...');
});

serverTCP.listen(PORT_TCP, () => {
  console.log('listening TCP on port', PORT);
});
