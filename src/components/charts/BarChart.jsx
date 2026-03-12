import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { getScoreColor, defaultFont } from '../../data/chartHelpers';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
ChartJS.defaults.font.family = defaultFont.family;
ChartJS.defaults.color = defaultFont.color;

export default function BarChart({ labels, data, colors, horizontal, max, label, stepSize }) {
  const bgColors = colors || data.map((val) => getScoreColor(val));

  const chartData = {
    labels,
    datasets: [
      {
        label: label || 'Performance %',
        data,
        backgroundColor: bgColors,
        borderRadius: horizontal ? 4 : 6,
      },
    ],
  };

  const options = {
    indexAxis: horizontal ? 'y' : 'x',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      [horizontal ? 'x' : 'y']: {
        beginAtZero: true,
        max: max || 100,
        ticks: {
          callback: (v) => v + '%',
          stepSize: stepSize,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
}
