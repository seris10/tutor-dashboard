import AnalysisCard from '../shared/AnalysisCard';

export default function ActionItems({ items }) {
  return (
    <div className="analysis-grid" style={{ marginTop: '1.5rem' }}>
      <AnalysisCard title="Immediate Actions" style={{ background: 'var(--chart-danger)' }}>
        <ul>
          {items.immediate.map((item, i) => <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}
        </ul>
      </AnalysisCard>

      <AnalysisCard title="Data Collection Needs" style={{ background: 'var(--chart-warning)', color: 'var(--sage-dark)' }}>
        <ul>
          {items.dataNeeds.map((item, i) => <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}
        </ul>
      </AnalysisCard>

      <AnalysisCard title="System Improvements" style={{ background: 'var(--sage-green)' }}>
        <ul>
          {items.system.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </AnalysisCard>
    </div>
  );
}
