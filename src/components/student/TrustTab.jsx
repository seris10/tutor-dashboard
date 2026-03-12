import ChartCard from '../shared/ChartCard';
import AnalysisCard from '../shared/AnalysisCard';
import LineChart from '../charts/LineChart';

export default function TrustTab({ student }) {
  if (!student.trustPhases) return null;

  return (
    <>
      <div className="dashboard-grid">
        <ChartCard icon="📊" title="Trust Level by Session" fullWidth>
          <div className="chart-container" style={{ height: '300px' }}>
            <LineChart
              labels={student.charts.trustDetail.labels}
              datasets={student.charts.trustDetail.datasets}
              showLegend
            />
          </div>
        </ChartCard>
      </div>

      <div className="analysis-grid">
        {student.trustPhases.map((phase, i) => (
          <AnalysisCard key={i} title={phase.title} type={phase.type}>
            <ul>
              {phase.items.map((item, j) => (
                <li key={j}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
              ))}
            </ul>
          </AnalysisCard>
        ))}
      </div>
    </>
  );
}
