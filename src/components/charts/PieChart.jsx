import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { defaultFont } from '../../data/chartHelpers';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.family = defaultFont.family;
ChartJS.defaults.color = defaultFont.color;

export default function PieChart({ labels, data, colors, legendPosition }) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: legendPosition || 'bottom',
        labels: { boxWidth: 10, padding: 8 },
      },
    },
  };

  return (
    <div className="chart-container">
      <Pie data={chartData} options={options} />
    </div>
  );
}
