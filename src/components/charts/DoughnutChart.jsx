import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { defaultFont } from '../../data/chartHelpers';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.family = defaultFont.family;
ChartJS.defaults.color = defaultFont.color;

export default function DoughnutChart({ labels, data, colors, legendPosition, tooltipConfig }) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: legendPosition || 'right',
        labels: { boxWidth: 14, padding: 10, font: { size: 14 } },
      },
      tooltip: tooltipConfig || {},
    },
  };

  return (
    <div className="chart-container">
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
