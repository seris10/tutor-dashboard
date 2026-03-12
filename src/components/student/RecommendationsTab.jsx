import RecommendationCard from '../shared/RecommendationCard';
import ChartCard from '../shared/ChartCard';
import Timeline from '../shared/Timeline';

export default function RecommendationsTab({ student }) {
  return (
    <>
      <div className="recommendations-grid">
        {student.recommendations.map((r, i) => (
          <RecommendationCard key={i} priority={r.priority} title={r.title} description={r.description} />
        ))}
      </div>

      {student.sessionTimeline && (
        <ChartCard icon="📅" title="Suggested Session Timeline" fullWidth style={{ marginTop: '2rem' }}>
          <Timeline items={student.sessionTimeline} />
        </ChartCard>
      )}

      {student.theoreticalFramework && (
        <ChartCard icon="🧠" title="Theoretical Framework" fullWidth style={{ marginTop: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {student.theoreticalFramework.map((f, i) => (
              <div key={i}>
                <h4 style={{ color: 'var(--sage-green)', marginBottom: '0.5rem' }}>{f.title}</h4>
                <ul style={{ fontSize: '0.85rem', paddingLeft: '1.2rem' }}>
                  {f.items.map((item, j) => <li key={j}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </ChartCard>
      )}
    </>
  );
}
