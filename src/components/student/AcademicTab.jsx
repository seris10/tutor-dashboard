import ChartCard from '../shared/ChartCard';
import SkillBar from '../shared/SkillBar';
import QuoteBox from '../shared/QuoteBox';

export default function AcademicTab({ student }) {
  if (!student.mathSkills) return null;

  return (
    <>
      <div className="dashboard-grid">
        <ChartCard icon="📐" title="Math Skills">
          {student.mathSkills.map((s, i) => (
            <SkillBar key={i} label={s.label} value={s.value} descriptor={s.descriptor} />
          ))}
        </ChartCard>
        <ChartCard icon="📖" title="Reading Skills">
          {student.readingSkills.map((s, i) => (
            <SkillBar key={i} label={s.label} value={s.value} descriptor={s.descriptor} />
          ))}
        </ChartCard>
      </div>

      {student.criticalFinding && (
        <ChartCard icon="🔍" title="Critical Finding: Assessment-Context Gap" fullWidth>
          <QuoteBox attribution={`- ${student.criticalFinding.attribution}`}>
            <strong>S6 Observation:</strong> {student.criticalFinding.observation}
          </QuoteBox>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
            <div>
              <h4 style={{ color: 'var(--chart-success)', marginBottom: '0.5rem' }}>IEP Assessment (Standardized)</h4>
              <ul style={{ fontSize: '0.9rem', paddingLeft: '1.5rem' }}>
                {student.criticalFinding.iep.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--chart-danger)', marginBottom: '0.5rem' }}>Classroom Observations</h4>
              <ul style={{ fontSize: '0.9rem', paddingLeft: '1.5rem' }}>
                {student.criticalFinding.classroom.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            <strong>Conclusion:</strong> {student.criticalFinding.conclusion}
          </p>
        </ChartCard>
      )}
    </>
  );
}
