"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function AnalyticsChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const labels = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9"];

  const data = {
    labels,
    datasets: [
      {
        label: "Your Score",
        data: [8.7, 7.9, 8.2, 9.0, 8.5, 7.8, 9.2, 8.6, 8.9],
        backgroundColor: "#2563eb",
        borderRadius: 4,
      },
      {
        label: "Department Average",
        data: [7.5, 7.2, 7.8, 8.1, 7.9, 7.4, 8.3, 8.0, 8.2],
        backgroundColor: "#94a3b8",
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="h-[300px] w-full">
      <Bar options={options} data={data} />
    </div>
  );
}
