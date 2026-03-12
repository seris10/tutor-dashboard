import { Link } from 'react-router-dom';

export default function Footer({ lastUpdated, studentCount, showBackLink }) {
  return (
    <footer className="dashboard-footer">
      <p><strong>Bright Horizons Tutoring</strong> | Student Data Dashboard</p>
      {lastUpdated && (
        <p>Last Updated: {lastUpdated}{studentCount ? ` | ${studentCount} Students Tracked` : ''}</p>
      )}
      {showBackLink && (
        <p><Link to="/">Back to Admin Dashboard</Link></p>
      )}
    </footer>
  );
}
