import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartColors, defaultFont } from '../../data/chartHelpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
ChartJS.defaults.font.family = defaultFont.family;
ChartJS.defaults.color = defaultFont.color;

export default function LineChart({ labels, datasets, max, stepSize, showLegend }) {
  const chartData = {
    labels,
    datasets: datasets.map((ds) => ({
      label: ds.label,
      data: ds.data,
      borderColor: ds.color || chartColors.sage,
      backgroundColor: ds.fill !== false
        ? (ds.color ? ds.color + '20' : 'rgba(38, 92, 47, 0.1)')
        : undefined,
      tension: 0.3,
      fill: ds.fill !== false,
      borderDash: ds.borderDash,
      pointBackgroundColor: ds.pointColors,
      pointRadius: ds.pointRadius,
      pointHoverRadius: ds.pointHoverRadius,
      yAxisID: 'y',
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend !== undefined ? showLegend : datasets.length > 1,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: max || 10,
        ticks: { stepSize: stepSize || 2 },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}
