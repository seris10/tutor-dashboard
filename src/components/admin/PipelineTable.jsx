import Badge from '../shared/Badge';

const colorMap = { success: 'var(--chart-success)', warning: 'var(--chart-warning)', danger: 'var(--chart-danger)' };

export default function PipelineTable({ data }) {
  return (
    <div className="table-scroll">
      <table className="assignment-table">
        <thead>
          <tr>
            <th>Student</th>
            <th style={{ textAlign: 'center' }}>Engagement</th>
            <th style={{ textAlign: 'center' }}>Progress</th>
            <th style={{ textAlign: 'center' }}>Profile</th>
            <th style={{ textAlign: 'center' }}>Notes</th>
            <th>Overall</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.student}>
              <td><strong>{row.student}</strong></td>
              <td style={{ textAlign: 'center', color: colorMap[row.engColor] }}>{row.engagement}</td>
              <td style={{ textAlign: 'center', color: colorMap[row.progColor] }}>{row.progress}</td>
              <td style={{ textAlign: 'center', color: colorMap[row.profColor] }}>{row.profile}</td>
              <td style={{ textAlign: 'center', color: colorMap[row.notesColor] }}>{row.notes}</td>
              <td><Badge type={row.overallType}>{row.overall}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: '0.8rem', color: 'var(--sage-light)', marginTop: '0.75rem' }}>
        <strong>Legend:</strong> ✔ complete &nbsp;|&nbsp; ◔ partial &nbsp;|&nbsp; ✘ missing
      </p>
    </div>
  );
}
