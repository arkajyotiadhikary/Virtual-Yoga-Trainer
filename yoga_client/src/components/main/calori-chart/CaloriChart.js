// import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

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
        ],
        datasets: [
            {
                label: "Calories Burn This Week",
                data: [55, 23, 96, 100, 67, 89, 10],
                backgroundColor: ["rgba(13, 71, 161, 0.6)"],
            },
        ],
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
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
                maintainAspectRatio: false,
            }}
        />
    );
};

export default CaloriChart;
