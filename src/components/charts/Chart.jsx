import './Chart.css';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const Chart = ({ stock }) => {
    if (!stock || !stock.open || !stock.high || !stock.low || !stock.current) {
        return <p>Stock data is unavailable. Please try again later.</p>;
    }

    const data = {
        labels: ["Open", "High", "Low", "Close"],
        datasets: [
            {
                label: `${stock.description} (${stock.symbol})`,
                data: [stock.open, stock.high, stock.low, stock.current],
                borderColor: "rgba(106, 13, 173, 1)",
                backgroundColor: "rgba(106, 13, 173, 0.2)",
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false } },
            y: { grid: { display: true } },
        },
    };

    return (
        <div className="chart-wrapper">
            <Line data={data} options={options} />
        </div>
    );
};

export default Chart;