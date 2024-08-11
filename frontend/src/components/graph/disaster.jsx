import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DisasterBarGraph = ({ data, state }) => {
    const chartData = {
        labels: ['Earthquakes', 'Rainfall (mm)', 'Cyclones', 'Floods', 'Tsunamis'],
        datasets: [
            {
                label: `${state} Disaster Data`,
                data: [
                    data.earthquakes || 0,
                    data.rainfall || 0,
                    data.cyclones || 0,
                    data.floods || 0,
                    data.tsunamis || 0
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: `${state} Disaster Data`
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 14
                    }
                },
                grid: {
                    display: true
                }
            }
        }
    };

    return (
        <div className="bar-graph">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default DisasterBarGraph;
