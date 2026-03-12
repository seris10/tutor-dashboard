import { Link } from 'react-router-dom';
import Badge from '../shared/Badge';

export default function StudentCard({ student }) {
  const s = student;
  const statusClass = s.status === 'active' ? 'status-active' : s.status === 'new' ? 'status-new' : 'status-inactive';
  const statusLabel = s.status === 'active' ? 'Active' : s.status === 'new' ? 'New' : 'Inactive';

  return (
    <Link to={`/student/${s.id}`} className="student-card">
      <div className="student-card-header">
        <h2>{s.name}</h2>
        <span className="grade">{s.grade}</span>
      </div>
      <div className="student-card-body">
        <div className="student-meta">
          {s.programs.map((p) => (
            <Badge key={p} type={p === 'academic' ? 'math' : p === 'guitar' ? 'guitar' : 'secondary'}>
              {p === 'academic' ? 'Academic' : p === 'guitar' ? 'Guitar' : p}
            </Badge>
          ))}
          {s.programs.length === 0 && <Badge type="secondary">TBD</Badge>}
          <span className={statusClass}>{statusLabel}</span>
        </div>

        <div className="card-section-label">Engagement</div>
        <div className="engagement-row">
          <div className="engagement-metric">
            <div className="engagement-value">{s.engagement.total}</div>
            <div className="engagement-label">total</div>
          </div>
          <div className="engagement-metric">
            <div className="engagement-value">{s.engagement.recent}</div>
            <div className="engagement-label">recent</div>
          </div>
          <div className="engagement-metric">
            <div className="engagement-value">{s.engagement.last}</div>
            <div className="engagement-label">last</div>
          </div>
        </div>

        <div className="card-section-label">Progress</div>
        <div className="progress-section">
          {s.progressNoData ? <span className="no-data">{s.progress}</span> : s.progress}
        </div>

        <div className="data-maturity">
          <div className="maturity-item">
            <div className={`maturity-dot ${s.dataMaturity.profile ? 'filled' : 'empty'}`} />
            <span className="maturity-label">Profile</span>
          </div>
          <div className="maturity-item">
            <div className={`maturity-dot ${s.dataMaturity.quantified ? 'filled' : 'empty'}`} />
            <span className="maturity-label">Quantified</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
