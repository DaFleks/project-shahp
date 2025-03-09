"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const OrderTypeDonutChart = ({ customerOrders, guestOrders }) => {
    const chartData = {
        labels: ["Customer Orders", "Guest Orders"],
        datasets: [
            {
                label: "Orders",
                data: [customerOrders, guestOrders],
                backgroundColor: ["#4CAF50", "#FF9800"], // Green & Orange
                borderColor: ["#388E3C", "#F57C00"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            tooltip: { enabled: true },
        },
    };

    return (
        <div className="w-full p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Customer vs. Guest Orders</h2>
            <div className="w-60 h-60">
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    );
};

export default OrderTypeDonutChart;
