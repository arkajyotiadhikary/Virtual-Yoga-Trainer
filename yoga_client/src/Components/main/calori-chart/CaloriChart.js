import { useState, useEffect } from "react";
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
                borderWidth: 1,
            },
        ],
    };

    return (
        <Bar
            style={{ height: "5rem" }}
            data={dumData}
            height="1500px"
            width="1500px"
            options={{ maintainAspectRatio: false }}
        />
    );
};

export default CaloriChart;
