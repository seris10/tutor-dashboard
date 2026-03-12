import ChartCard from '../shared/ChartCard';
import BarChart from '../charts/BarChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import AnalysisCard from '../shared/AnalysisCard';
import EmptyState from '../shared/EmptyState';

export default function OverviewTab({ student }) {
  const s = student;

  // Maya overview
  if (s.id === 'maya') {
    return (
      <>
        <div className="dashboard-grid">
          <ChartCard icon="📈" title="Performance by Subject">
            <BarChart labels={s.charts.subjectBar.labels} data={s.charts.subjectBar.data} colors={s.charts.subjectBar.colors} />
          </ChartCard>
          <ChartCard icon="🎯" title="Math Skills Radar">
            <RadarChart labels={s.charts.mathRadar.labels} data={s.charts.mathRadar.data} tooltipConfig={s.charts.mathRadar.tooltipConfig} />
          </ChartCard>
          <ChartCard icon="📖" title="Reading & Writing Skills">
            <DoughnutChart labels={s.charts.readingDoughnut.labels} data={s.charts.readingDoughnut.data} colors={s.charts.readingDoughnut.colors} tooltipConfig={s.charts.readingDoughnut.tooltipConfig} />
          </ChartCard>
          <ChartCard icon="✅" title="Completion Status">
            <PieChart labels={s.charts.completionPie.labels} data={s.charts.completionPie.data} colors={s.charts.completionPie.colors} />
          </ChartCard>
          <ChartCard icon="🎯" title="All Skills Overview">
            <div className="chart-container" style={{ height: '350px' }}>
              <PolarChart labels={s.charts.allSkillsPolar.labels} data={s.charts.allSkillsPolar.data} tooltipConfig={s.charts.allSkillsPolar.tooltipConfig} />
            </div>
          </ChartCard>
        </div>
        <ChartCard icon="⭐" title="Teacher Feedback" fullWidth>
          <div className="teacher-feedback">
            {s.feedback.map((f, i) => (
              <div key={i} className="feedback-item">
                <span className="feedback-emoji">{f.emoji}</span> {f.text}
              </div>
            ))}
          </div>
        </ChartCard>
      </>
    );
  }

  // Jordan overview
  if (s.id === 'jordan') {
    return (
      <>
        <div className="dashboard-grid">
          <ChartCard icon="📈" title="Trust Trajectory (S1-S7)">
            <LineChart labels={s.charts.trustLine.labels} datasets={s.charts.trustLine.datasets} showLegend={false} />
          </ChartCard>
          <ChartCard icon="🎯" title="Interest Map">
            <RadarChart labels={s.charts.interestRadar.labels} data={s.charts.interestRadar.data} max={10} />
          </ChartCard>
          <ChartCard icon="📐" title="Academic Profile">
            <BarChart labels={s.charts.academicBar.labels} data={s.charts.academicBar.data} colors={s.charts.academicBar.colors} />
          </ChartCard>
          <ChartCard icon="🧠" title="Cognitive Strengths">
            <RadarChart
              labels={s.charts.strengthsRadar.labels}
              data={s.charts.strengthsRadar.data}
              datasets={[{
                label: 'Strength',
                data: s.charts.strengthsRadar.data,
                backgroundColor: 'rgba(61, 122, 71, 0.2)',
                borderColor: s.charts.strengthsRadar.color,
                borderWidth: 2,
                pointBackgroundColor: s.charts.strengthsRadar.color,
              }]}
            />
          </ChartCard>
        </div>
        <ChartCard icon="💡" title="Key Observations" fullWidth>
          <div className="teacher-feedback">
            {s.observations.map((o, i) => (
              <div key={i} className="feedback-item">
                <span className="feedback-emoji">{o.emoji}</span> {o.text}
              </div>
            ))}
          </div>
        </ChartCard>
      </>
    );
  }

  // Luna overview
  if (s.id === 'luna') {
    return (
      <>
        <div className="analysis-grid">
          <AnalysisCard title="Known Context" type="developing">
            <ul>{s.knownContext.map((item, i) => <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}</ul>
          </AnalysisCard>
          <AnalysisCard title="Concerns (Feb 7)" type="weakness">
            <ul>{s.concerns.map((item, i) => <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}</ul>
          </AnalysisCard>
        </div>
        <ChartCard icon="📋" title="Action Items" fullWidth>
          <div className="recommendations-grid">
            {s.recommendations.map((r, i) => (
              <div key={i} className="recommendation-card">
                <span className={`priority-tag priority-${r.priority}`}>{r.priority === 'high' ? 'Next Session' : r.priority === 'medium' ? 'Ongoing' : 'Data Collection'}</span>
                <h4>{r.title}</h4>
                <p>{r.description}</p>
              </div>
            ))}
          </div>
        </ChartCard>
        <EmptyState icon="📊" title="Data Collection In Progress" message="Session tracking, progress metrics, and detailed observations will be added as data is collected and structured." />
      </>
    );
  }

  // Sofia overview
  if (s.id === 'sofia') {
    return (
      <>
        <div className="analysis-grid">
          <AnalysisCard title="First Session Observations (Feb 7)" type="strength">
            <ul>{s.firstSessionObs.map((item, i) => <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}</ul>
          </AnalysisCard>
          <AnalysisCard title="Patterns to Watch" type="developing">
            <ul>{s.patternsToWatch.map((item, i) => <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}</ul>
          </AnalysisCard>
        </div>
        <ChartCard icon="📋" title="Action Items" fullWidth>
          <div className="recommendations-grid">
            {s.recommendations.map((r, i) => (
              <div key={i} className="recommendation-card">
                <span className={`priority-tag priority-${r.priority}`}>{r.priority === 'high' ? 'Immediate' : r.priority === 'medium' ? 'Next Session' : 'Ongoing'}</span>
                <h4>{r.title}</h4>
                <p>{r.description}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </>
    );
  }

  // Carmen
  if (s.id === 'carmen') {
    return (
      <>
        <div className="analysis-grid">
          <AnalysisCard title="Known Information" type="developing">
            <ul>{s.knownInfo.map((item, i) => <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}</ul>
          </AnalysisCard>
        </div>
        <EmptyState icon="🎸" title="Awaiting First Session" message="Carmen is expected at the next Guitar Club session. Data will be collected upon attendance." />
        <ChartCard icon="📋" title="First Session Plan" fullWidth style={{ marginTop: '2rem' }}>
          <div className="recommendations-grid">
            {s.recommendations.map((r, i) => (
              <div key={i} className="recommendation-card">
                <span className={`priority-tag priority-${r.priority}`}>{r.priority === 'high' ? 'Priority' : 'First Session'}</span>
                <h4>{r.title}</h4>
                <p>{r.description}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </>
    );
  }

  // Priya
  if (s.id === 'priya') {
    return (
      <>
        <EmptyState icon="📝" title="No Data Yet" message="This student profile is a placeholder. Data will be added when sessions begin or enrollment information is received." />
        <ChartCard icon="📋" title="To Collect" fullWidth style={{ marginTop: '2rem' }}>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
            {s.toCollect.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </ChartCard>
      </>
    );
  }

  return <EmptyState icon="📊" title="No Data" message="No data available for this student." />;
}
