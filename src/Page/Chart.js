import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

// Add a new chart component
const CustomChart = ({
  data,
  chartType,
  xAxis = "Company",
  yAxis = "sales",
  title = "Doughnut Chart Title",
}) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data) {
      const uniqueXAxis = Array.from(new Set(data.map((item) => item[xAxis])));
      const uniqueYAxis = uniqueXAxis.map((innewValue) =>
        data
          .filter((item) => item[xAxis] === innewValue)
          .reduce((sum, item) => sum + item[yAxis], 0)
      );

      setChartData({
        labels: uniqueXAxis,
        datasets: [
          {
            // label: "Sales",
            data: uniqueYAxis,
            backgroundColor: [
              "#FFD3E0", // Pink
              "#FFDAB9", // Peach
              "#E6E6FA", // Lavender
              "#E0FFFF", // Light Cyan
              "#F0E68C", // Khaki
              "#F5F5DC", // Beige
              "#FFFACD", // Lemon Chiffon
              "#F0FFF0", // Honeydew
              "#F0F8FF", // Alice Blue
              "#FFF5EE", // Seashell
            ],
            borderColor: "#000",
            borderWidth: 2,
          },
        ],
      });
    }
  }, [data, xAxis, yAxis]);

  // Determine the chart component based on the chartType prop
  const ChartComponent = (() => {
    switch (chartType) {
      case "bar":
        return Bar;
      case "doughnut":
        return Doughnut;
      case "pie":
        return Pie;
      case "line":
        return Line;
      default:
        return null;
    }
  })();

  return (
    <div>
      {chartData && ChartComponent && (
        <ChartComponent
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false, // Hide legend
              },
              title: {
                display: true,
                text: title, // Set the desired title text
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
            },
            scales:
              chartType === "bar" || chartType === "line"
                ? {
                    y: {
                      title: {
                        display: true,
                        text: yAxis,
                      },
                      grid: {
                        display: false,
                      },
                      beginAtZero: true,
                      ticks: {
                        callback: (value) => `${value / 1000000}M`,
                      },
                    },
                    x: {
                      title: {
                        display: true,
                        text: xAxis,
                      },
                      grid: {
                        display: false,
                      },
                      beginAtZero: true,
                    },
                  }
                : null,
          }}
        />
      )}
    </div>
  );
};

export default CustomChart;
