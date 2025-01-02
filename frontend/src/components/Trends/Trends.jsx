import React, { useEffect, useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import "chart.js/auto";
import { axiosInstance } from "../../lib/axios";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const Trends = () => {
  const [chartData, setChartData] = useState(null);

  // Modern color palette
  const colorPalette = {
    backgrounds: [
      'rgba(101, 116, 205, 0.8)',
      'rgba(149, 97, 226, 0.8)',
      'rgba(246, 109, 155, 0.8)',
      'rgba(255, 157, 110, 0.8)',
      'rgba(88, 189, 184, 0.8)',
      'rgba(87, 148, 242, 0.8)'
    ],
    borders: [
      'rgba(101, 116, 205, 1)',
      'rgba(149, 97, 226, 1)',
      'rgba(246, 109, 155, 1)',
      'rgba(255, 157, 110, 1)',
      'rgba(88, 189, 184, 1)',
      'rgba(87, 148, 242, 1)'
    ]
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/trends");
        const data = await response.data;

        const labels = data.map((item) => item._id);
        const likes = data.map((item) => item.totalLikes);

        const preparedData = {
          labels,
          datasets: [
            {
              label: "Likes by Category",
              data: likes,
              backgroundColor: colorPalette.backgrounds,
              borderColor: colorPalette.borders,
              borderWidth: 2,
            },
          ],
        };

        setChartData(preparedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-lg text-gray-500">Loading trends data...</div>
      </div>
    );
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Engagement Analytics
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Bar Chart */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <Bar
                data={chartData}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      display: true,
                      text: 'Likes Distribution by Category'
                    }
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Share Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <Pie
                data={{
                  labels: chartData.labels,
                  datasets: [{
                    data: chartData.datasets[0].data,
                    backgroundColor: colorPalette.backgrounds,
                    borderColor: colorPalette.borders,
                    borderWidth: 2
                  }]
                }}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      display: true,
                      text: 'Category Share Analysis'
                    }
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Line Chart - Full Width */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Trend Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <Line
              data={{
                labels: chartData.labels,
                datasets: [{
                  label: 'Engagement Trend',
                  data: chartData.datasets[0].data,
                  backgroundColor: 'rgba(101, 116, 205, 0.2)',
                  borderColor: 'rgba(101, 116, 205, 1)',
                  borderWidth: 3,
                  fill: true,
                  tension: 0.4
                }]
              }}
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: {
                    display: true,
                    text: 'Engagement Over Time'
                  }
                }
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Trends;