import ChartCard from '../shared/ChartCard';
import Badge from '../shared/Badge';
import RadarChart from '../charts/RadarChart';

export default function InterestsTab({ student }) {
  if (!student.interestBridges) return null;

  return (
    <>
      <div className="dashboard-grid">
        <ChartCard icon="🎯" title="Interest Map - Engagement & Depth" fullWidth>
          <div className="chart-container" style={{ height: '350px' }}>
            <RadarChart
              labels={student.charts.interestFullRadar.labels}
              datasets={student.charts.interestFullRadar.datasets}
              max={10}
              showLegend
            />
          </div>
        </ChartCard>
      </div>

      <ChartCard icon="🌉" title="Academic Bridges" fullWidth>
        <div className="table-scroll">
          <table className="assignment-table">
            <thead>
              <tr>
                <th>Interest</th>
                <th>Depth</th>
                <th>Engagement</th>
                <th>Academic Bridge</th>
              </tr>
            </thead>
            <tbody>
              {student.interestBridges.map((b, i) => (
                <tr key={i}>
                  <td>{b.interest}</td>
                  <td><Badge type={b.depthType}>{b.depth}</Badge></td>
                  <td><Badge type={b.engType}>{b.engagement}</Badge></td>
                  <td>{b.bridge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </>
  );
}
