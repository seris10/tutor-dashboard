import ChartCard from '../shared/ChartCard';
import BarChart from '../charts/BarChart';
import SkillBar from '../shared/SkillBar';

export default function SubjectsTab({ student }) {
  if (!student.subjects) return null;

  return (
    <>
      <div className="dashboard-grid">
        <ChartCard icon="📊" title="Subject Comparison" fullWidth>
          <div className="chart-container" style={{ height: '200px' }}>
            <BarChart
              labels={student.charts.subjectHorizontal.labels}
              data={student.charts.subjectHorizontal.data}
              colors={student.charts.subjectHorizontal.colors}
              horizontal
            />
          </div>
        </ChartCard>
      </div>

      <div className="analysis-grid">
        {student.subjects.map((subj, i) => (
          <div key={i} className="analysis-card">
            <div
              className="analysis-header"
              style={{
                background: subj.type === 'danger' ? 'var(--chart-danger)'
                  : subj.type === 'warning' ? 'var(--chart-warning)'
                  : subj.type === 'purple' ? '#7b5c8f'
                  : 'var(--sage-green)',
                color: subj.type === 'warning' ? 'var(--sage-dark)' : 'white',
              }}
            >
              {subj.icon} {subj.name} {subj.pct !== null ? `(${subj.pct}%)` : `(${subj.docs} docs)`}
            </div>
            <div className="analysis-body">
              {subj.pct !== null && (
                <SkillBar label="Overall" value={subj.pct} />
              )}
              {subj.docs && !subj.pct && (
                <SkillBar label="Documents" value={100} descriptor={subj.docs} />
              )}
              <ul>
                {subj.strengths && subj.strengths.length > 0 && (
                  <li><strong>Strong:</strong> {subj.strengths.join(', ')}</li>
                )}
                {subj.weaknesses && subj.weaknesses.length > 0 && (
                  <li><strong>Weak:</strong> {subj.weaknesses.join(', ')}</li>
                )}
                {subj.content && <li><strong>Content:</strong> {subj.content}</li>}
                {subj.pattern && <li><strong>Pattern:</strong> {subj.pattern}</li>}
                {subj.rootCause && <li><strong>Root cause:</strong> {subj.rootCause}</li>}
                {subj.units && <li><strong>Units:</strong> {subj.units}</li>}
                {subj.note && <li><strong>Note:</strong> {subj.note}</li>}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
