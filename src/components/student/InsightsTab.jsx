import AnalysisCard from '../shared/AnalysisCard';
import ChartCard from '../shared/ChartCard';
import QuoteBox from '../shared/QuoteBox';
import SkillBar from '../shared/SkillBar';

export default function InsightsTab({ student }) {
  const ins = student.insights;
  if (!ins) return null;

  return (
    <>
      <div className="analysis-grid">
        <AnalysisCard title="💪 Key Strengths" type="strength">
          <ul>{ins.strengths.map((s, i) => <li key={i}><strong>{s.text.split(':')[0]}:</strong>{s.text.split(':').slice(1).join(':')}</li>)}</ul>
        </AnalysisCard>
        <AnalysisCard title="⚠️ Critical Gaps (21 errors classified)" type="weakness">
          <ul>{ins.gaps.map((g, i) => <li key={i}><strong>{g.text.split(':')[0]}:</strong>{g.text.split(':').slice(1).join(':')}</li>)}</ul>
        </AnalysisCard>
        <AnalysisCard title="🌱 Key Patterns" type="developing">
          <ul>{ins.patterns.map((p, i) => <li key={i}><strong>{p.text.split(':')[0]}:</strong>{p.text.split(':').slice(1).join(':')}</li>)}</ul>
        </AnalysisCard>
      </div>

      <ChartCard icon="✍️" title="Sample Student Work" fullWidth style={{ marginTop: '1.5rem' }}>
        <h4 style={{ color: 'var(--chart-success)', marginBottom: '0.5rem' }}>Strengths</h4>
        {ins.sampleWork.strengths.map((q, i) => (
          <QuoteBox key={i} text={`"${q.text}"`} attribution={`- ${q.attribution}`} />
        ))}
        <h4 style={{ color: 'var(--chart-danger)', margin: '1.5rem 0 0.5rem' }}>Error Patterns</h4>
        {ins.sampleWork.errors.map((e, i) => (
          <QuoteBox key={i} attribution={`- ${e.source}`}>
            Problem: &ldquo;{e.problem}&rdquo;<br />
            <strong>Student Answer:</strong> {e.studentAnswer} <span style={{ color: 'var(--chart-danger)' }}>✗</span><br />
            <strong>Correct:</strong> {e.correct}
          </QuoteBox>
        ))}
      </ChartCard>

      <ChartCard icon="🎓" title="Learning Profile" fullWidth style={{ marginTop: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: 'var(--chart-success)' }}>Preferred Modes</h4>
            <p style={{ fontSize: '0.9rem' }}>{ins.learningProfile.preferred}</p>
            <SkillBar label="" value={ins.learningProfile.preferredPct} descriptor="" />
          </div>
          <div>
            <h4 style={{ color: 'var(--chart-warning)' }}>Challenge Areas</h4>
            <p style={{ fontSize: '0.9rem' }}>{ins.learningProfile.challenge}</p>
            <SkillBar label="" value={ins.learningProfile.challengePct} descriptor="" />
          </div>
          <div>
            <h4 style={{ color: 'var(--sage-green)' }}>Engagement</h4>
            <p style={{ fontSize: '0.9rem' }}>{ins.learningProfile.engagement}</p>
          </div>
        </div>
      </ChartCard>
    </>
  );
}
