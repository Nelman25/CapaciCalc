import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from "chart.js";
import { useInputStore } from "@/stores/useInputStore";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function CapacitorGraph() {
  const { graphData, mode } = useInputStore();

  const data = {
    datasets: [
      {
        label: "Capacitor Voltage",
        data: graphData,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "voltage",
        },
        borderColor: mode === "charge" ? "#3b82f6" : "#ef4444",
        backgroundColor: mode === "charge" ? "#93c5fd80" : "#fca5a580",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      x: {
        type: "linear",
        title: {
          display: true,
          text: "Time (s)",
        },
        min: 0,
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Voltage (V)",
        },
        min: 0,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(
              2
            )}V at ${context.parsed.x.toFixed(3)}s`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
