"use client"

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderStatusChart = ({ data }) => {
    const chartData = {
        labels: ["Complete", "Incomplete", "Cancelled"],
        datasets: [
            {
                data: [data.complete, data.incomplete, data.cancelled],
                backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
                hoverBackgroundColor: ["#45A049", "#FFA000", "#D32F2F"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        let value = tooltipItem.raw || 0;
                        return ` ${value} Orders`;
                    },
                },
            },
        },
    };

    return (
        <div className="w-full p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Order Status</h2>
            <div className="w-60 h-60">
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    );
};

export default OrderStatusChart;
