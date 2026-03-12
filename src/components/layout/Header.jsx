export default function Header({ title, subtitle, meta }) {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="header-title">
          <h1>{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>
        {meta && (
          <div className="header-meta">
            {meta.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
