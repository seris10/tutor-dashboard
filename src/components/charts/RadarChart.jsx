import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartColors, defaultFont } from '../../data/chartHelpers';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
ChartJS.defaults.font.family = defaultFont.family;
ChartJS.defaults.color = defaultFont.color;

export default function RadarChart({ labels, data, datasets, max, stepSize, tooltipConfig, showLegend }) {
  const chartData = {
    labels,
    datasets: datasets || [
      {
        label: 'Skill Level',
        data,
        backgroundColor: 'rgba(38, 92, 47, 0.2)',
        borderColor: chartColors.sage,
        borderWidth: 2,
        pointBackgroundColor: chartColors.sage,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: max || 100,
        ticks: { stepSize: stepSize || 20 },
      },
    },
    plugins: {
      legend: { display: showLegend || false, position: 'top' },
      tooltip: tooltipConfig || {},
    },
  };

  return (
    <div className="chart-container">
      <Radar data={chartData} options={options} />
    </div>
  );
}
