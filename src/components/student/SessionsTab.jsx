import ChartCard from '../shared/ChartCard';
import AnalysisCard from '../shared/AnalysisCard';
import Badge from '../shared/Badge';
import QuoteBox from '../shared/QuoteBox';
import EmptyState from '../shared/EmptyState';

export default function SessionsTab({ student }) {
  // Jordan sessions tab
  if (student.sessionLog) {
    return (
      <>
        <ChartCard icon="📋" title="Session-by-Session Progress" fullWidth>
          <div className="table-scroll">
            <table className="assignment-table">
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Date</th>
                  <th>Trust</th>
                  <th>Verbal</th>
                  <th>Eye Contact</th>
                  <th>Organization</th>
                  <th>Key Milestone</th>
                </tr>
              </thead>
              <tbody>
                {student.sessionLog.map((s, i) => (
                  <tr key={i}>
                    <td>{s.session}</td>
                    <td>{s.date}</td>
                    <td><Badge type={s.trustType}>{s.trust}</Badge></td>
                    <td>{s.verbal}</td>
                    <td>{s.eyeContact}</td>
                    <td>{s.organization}</td>
                    <td>{s.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>

        {student.whatsWorking && (
          <div className="analysis-grid" style={{ marginTop: '1.5rem' }}>
            <AnalysisCard title="What's Working" type="strength">
              <ul>{student.whatsWorking.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </AnalysisCard>
            <AnalysisCard title="Challenges" type="weakness">
              <ul>{student.challenges.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </AnalysisCard>
          </div>
        )}
      </>
    );
  }

  // Sofia sessions tab
  if (student.sessionEntries) {
    return (
      <ChartCard icon="📅" title="Session Log" fullWidth>
        <div className="session-log">
          {student.sessionEntries.map((s, i) => (
            <div key={i} className="session-entry">
              <div className="session-date">{s.date}</div>
              <div className="session-rating">{s.rating}</div>
              <div className="session-notes">{s.notes}</div>
            </div>
          ))}
        </div>
        <EmptyState icon="📊" title="More Sessions Needed" message="Session ratings and progress tracking will appear here as more sessions are logged." />
      </ChartCard>
    );
  }

  return <EmptyState icon="📅" title="No Sessions" message="No session data available." />;
}
