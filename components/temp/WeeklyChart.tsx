"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklySalesBarChart = ({ data }) => {
    // Sample data format: [{ week: "Week 1", revenue: 5000 }, { week: "Week 2", revenue: 7000 }]

    const chartData = {
        labels: data.map((entry) => entry.week),
        datasets: [
            {
                label: "Sales Revenue ($)",
                data: data.map((entry) => entry.revenue),
                backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue bars
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: "top" },
            tooltip: { enabled: true },
        },
        scales: {
            y: { beginAtZero: true, ticks: { callback: (value) => `$${value}` } },
            x: { grid: { display: false } },
        },
    };

    return (
        <div className="w-full p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Weekly Sales Revenue</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default WeeklySalesBarChart;