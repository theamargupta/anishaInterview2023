import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const BarChart = ({ data }) => {
  const labels = data.map((value) => {
    return value.month;
  });
  const barData = data.map((value) => value.sales);

  const dataSet = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: barData,
        backgroundColor: [
          "#FF5733",
          "#806F95",
          "#54B2F3",
          "#FFFF33",
          "#99FF33",
          "#33FF77",
          "#33FFFC",
          "#3399FF",
          "#7733FF",
          "#A833FF",
          "#FF33E9",
          "#FF3374",
        ],
      },
    ],
  };
  return <Bar options={options} data={dataSet} />;
};
const DoughnutChart = ({ data }) => {
  const labels = data.map((value) => {
    return value.month;
  });
  const doughnutData = data.map((value) => value.sales);

  const dataSet = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: doughnutData,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
      },
    ],
  };
  return <Doughnut options={options} data={dataSet} />;
};
const PieChart = ({ data }) => {
  const labels = data.map((value) => {
    return value.month;
  });
  const pieData = data.map((value) => value.sales);
  const PieDataSet = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: pieData,
        backgroundColor: [
          "#FF5733",
          "#806F95",
          "#54B2F3",
          "#FFFF33",
          "#99FF33",
          "#33FF77",
          "#33FFFC",
          "#3399FF",
          "#7733FF",
          "#A833FF",
          "#FF33E9",
          "#FF3374",
        ],
        borderColor: [
          "#FF5733",
          "#806F95",
          "#54B2F3",
          "#FFFF33",
          "#99FF33",
          "#33FF77",
          "#33FFFC",
          "#3399FF",
          "#7733FF",
          "#A833FF",
          "#FF33E9",
          "#FF3374",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie options={options} data={PieDataSet} />;
};
export { BarChart, DoughnutChart, PieChart };
