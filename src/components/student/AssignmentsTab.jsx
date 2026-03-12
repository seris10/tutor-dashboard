import ChartCard from '../shared/ChartCard';
import Badge from '../shared/Badge';
import DoughnutChart from '../charts/DoughnutChart';
import BarChart from '../charts/BarChart';

export default function AssignmentsTab({ student }) {
  if (!student.assignments) return null;

  return (
    <>
      <ChartCard icon="📋" title={`All Assignments (${student.meta.assignmentCount} documents)`} fullWidth>
        <div className="table-scroll">
          <table className="assignment-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Assignment</th>
                <th>Subject</th>
                <th>Score</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {student.assignments.map((a, i) => (
                <tr key={i}>
                  <td>{a.date}</td>
                  <td>{a.name}</td>
                  <td><Badge type={a.subject}>{a.subject.charAt(0).toUpperCase() + a.subject.slice(1)}</Badge></td>
                  <td><Badge type={a.scoreType}>{a.score}</Badge></td>
                  <td>{a.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>

      {student.charts.assignmentsBySubject && (
        <div className="dashboard-grid" style={{ marginTop: '1.5rem' }}>
          <ChartCard icon="📊" title="Assignments by Subject">
            <DoughnutChart
              labels={student.charts.assignmentsBySubject.labels}
              data={student.charts.assignmentsBySubject.data}
              colors={student.charts.assignmentsBySubject.colors}
            />
          </ChartCard>
          <ChartCard icon="📈" title="Score Distribution">
            <BarChart
              labels={student.charts.scoreDistribution.labels}
              data={student.charts.scoreDistribution.data}
              colors={student.charts.scoreDistribution.colors}
              max={12}
              stepSize={2}
            />
          </ChartCard>
        </div>
      )}
    </>
  );
}
