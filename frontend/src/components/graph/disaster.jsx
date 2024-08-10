// src/components/DisasterBarGraph.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DisasterBarGraph = ({ data }) => {
    const chartData = {
        labels: ['Earthquakes', 'Rainfall (mm)', 'Cyclones', 'Floods', 'Tsunamis'],
        datasets: [
            {
                label: 'Disaster Data',
                data: [
                    data.earthquakes || 0,
                    data.rainfall || 0,
                    data.cyclones || 0,
                    data.floods || 0,
                    data.tsunamis || 0
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
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
        maintainAspectRatio: false, // Allow custom height
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Disaster Data by State'
            }
        },
        layout: {
            padding: {
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12 // Adjust font size
                    }
                },
                grid: {
                    display: false // Hide grid lines if desired
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 12 // Adjust font size
                    }
                },
                grid: {
                    display: true // Show grid lines if desired
                }
            }
        }
    };

    return (
        <div className="bar-graph" style={{ width: '60%', height: '400px', margin: 'auto' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default DisasterBarGraph;
