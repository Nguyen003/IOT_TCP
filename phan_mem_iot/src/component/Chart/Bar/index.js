import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['2h', '5h', '8h', '11h', '14h', '17h', '20h', '23h'];
const randomValue = (count, min, max) => {
    const data = [];
    for (let i = 0; i < count; i++) {
        if (max === 1) {
            data.push(Math.random());
        } else {
            data.push(Math.random() * (max - min) + min);
        }
    }
    return data;
}

function ChartBarDetail() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'top',
                display: false,
            },
            title: {
                display: true,
                text: 'Bơm lọc UF 01'.toUpperCase(),
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Thời gian chạy'.toUpperCase(),
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Thời điểm'.toUpperCase(),
                },
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset1',
                data: randomValue(labels.length, 0, 1),
                backgroundColor: '#5A9CD6',
            }
        ],
    };
    return <Bar options={options} data={data} style={{ height: '100%' }} />;
}

function ChartBarControl() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'top',
                display: false,
            },
            title: {
                display: true,
                text: 'Bơm lọc UF 01'.toUpperCase(),
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Thời gian (phút)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Thời điểm',
                },
            },
        },
    };
    const data = {
        labels: ['1h', '3h', '5h', '7h', '9h', '11h', '13h', '15h', '17h', '19h', '21h', '23h'],
        datasets: [
            {
                label: 'Dataset2',
                data: ['10', '20', '60', '40', '55', '23', '13', '43', '50', '10', '5', '28'],
                backgroundColor: '#5A9CD6',
            }
        ],
    };
    return <Bar options={options} data={data}/>
}

export { ChartBarDetail, ChartBarControl };