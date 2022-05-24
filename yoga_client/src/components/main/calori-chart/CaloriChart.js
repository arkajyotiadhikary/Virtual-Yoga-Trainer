// import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const CaloriChart = () => {
    const dumData = {
        labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        datasets: [
            {
                label: "Calories Burn This Month",
                data: [
                    55, 23, 96, 100, 67, 89, 10, 55, 23, 96, 100, 67, 89, 10,
                    55, 23, 96, 100, 67, 89, 10, 55, 23, 96, 100, 67, 89, 10,
                ],
                backgroundColor: ["rgb(236, 154, 154)"],
            },
        ],
    };
    const options = {
        scales: {
            y: {
                display: false,
            },
        },
        plugins: {
            datalabels: {
                display: true,
                color: "black",
                formatter: Math.round,
                anchor: "end",
                offset: -20,
                align: "start",
            },
        },
        legend: {
            display: false,
        },
    };

    return (
        <Bar
            className="calori-bar"
            data={dumData}
            height="1500px"
            width="1500px"
            options={{
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        display: true,
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        display: true,
                    },
                },
                maintainAspectRatio: false,
            }}
        />
    );
};

export default CaloriChart;
