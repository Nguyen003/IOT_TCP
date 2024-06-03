import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', { transports: ['websocket'] });

const EVENTS_OF_EACH_LIGHT = {
    LIGHT_1: {
        TURN_ON: '000000000000000000001',
        TURN_OFF: '000000000000000000011',
    },
    LIGHT_2: {
        TURN_ON: '000000000000000000002',
        TURN_OFF: '000000000000000000022',
    },
};

const VALUES_OF_EACH_LIGHT = {
    LIGHT_1: {
        // ON: '$EMS,1351219863,GET,1000#',
        // OFF: '$EMS,1351219863,GET,0000#',
        ON: '#000010',
        OFF: '#000000',
    },
    LIGHT_2: {
        // ON: '$EMS,1351219863,GET,2000#',
        // OFF: '$EMS,1351219863,GET,2002#',
        ON: '#000001',
        OFF: '#000000',
    },
};

const STATUS_WHEN_COMPARE_WITH_INNER_HTML = {
    ON: 'Bật',
    OFF: 'Tắt',
};

export const useLightControl = () => {
    const [light1Status, setLight1Status] = useState('Bật');
    const [light2Status, setLight2Status] = useState('Bật');

    useEffect(() => {
        socket.on('connect', getInitValueFromLight);

        socket.on('GET_INIT_VALUE_FROM_LIGHT', (value) => {
            const statusOfLight1 = getCurrentStatusFromLight('LIGHT_1', value.LIGHT_1);
            setLight1Status(statusOfLight1 === 'ON' ? 'Bật' : 'Tắt');
            //
            const statusOfLight2 = getCurrentStatusFromLight('LIGHT_2', value.LIGHT_2);
            setLight2Status(statusOfLight2 === 'ON' ? 'Bật' : 'Tắt');
        });

        socket.on('ON_OFF_LIGHT', (value) => {
            if (value.type === 'LIGHT_1') {
                const statusOfLight1 = getCurrentStatusFromLight('LIGHT_1', value.currentValue);
                setLight1Status(statusOfLight1 === 'ON' ? 'Bật' : 'Tắt');
            } else if (value.type === 'LIGHT_2') {
                const statusOfLight2 = getCurrentStatusFromLight('LIGHT_2', value.currentValue);
                setLight2Status(statusOfLight2 === 'ON' ? 'Bật' : 'Tắt');
            }
        });

        return () => {
            socket.off('connect', getInitValueFromLight);
            socket.off('GET_INIT_VALUE_FROM_LIGHT');
            socket.off('ON_OFF_LIGHT');
        };
    }, []);

    const getInitValueFromLight = () => {
        socket.emit('GET_INIT_VALUE_FROM_LIGHT');
    };

    const getCurrentStatusFromLight = (key, currentValue) => {
        if (VALUES_OF_EACH_LIGHT[key].ON === currentValue) {
            return 'ON';
        }
        if (VALUES_OF_EACH_LIGHT[key].OFF === currentValue) {
            return 'OFF';
        }
    };

    const handleOnOffLight = (light) => {
        console.log(light);
        if (light === 'LIGHT_1') {
            if (light1Status === STATUS_WHEN_COMPARE_WITH_INNER_HTML.ON) {
                socket.emit('ON_OFF_LIGHT', EVENTS_OF_EACH_LIGHT.LIGHT_1.TURN_OFF);
            } else if (light1Status === STATUS_WHEN_COMPARE_WITH_INNER_HTML.OFF) {
                socket.emit('ON_OFF_LIGHT', EVENTS_OF_EACH_LIGHT.LIGHT_1.TURN_ON);
            }
        } else if (light === 'LIGHT_2') {
            if (light2Status === STATUS_WHEN_COMPARE_WITH_INNER_HTML.ON) {
                socket.emit('ON_OFF_LIGHT', EVENTS_OF_EACH_LIGHT.LIGHT_2.TURN_OFF);
            } else if (light2Status === STATUS_WHEN_COMPARE_WITH_INNER_HTML.OFF) {
                socket.emit('ON_OFF_LIGHT', EVENTS_OF_EACH_LIGHT.LIGHT_2.TURN_ON);
            }
        }
    };

    return { light1Status, light2Status, handleOnOffLight };
};
