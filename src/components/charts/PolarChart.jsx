import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { getPolarColor, defaultFont } from '../../data/chartHelpers';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.defaults.font.family = defaultFont.family;
ChartJS.defaults.color = defaultFont.color;

export default function PolarChart({ labels, data, colors, max, tooltipConfig }) {
  const bgColors = colors || data.map((val) => getPolarColor(val));

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: { boxWidth: 14, padding: 10, font: { size: 14 } },
      },
      tooltip: tooltipConfig || {},
    },
    scales: {
      r: { beginAtZero: true, max: max || 100 },
    },
  };

  return (
    <div className="chart-container">
      <PolarArea data={chartData} options={options} />
    </div>
  );
}
