export default function ChartCard({ icon, title, fullWidth, style, children }) {
  return (
    <div className={`chart-card${fullWidth ? ' full-width' : ''}`} style={style}>
      <div className="chart-header">
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="chart-body">{children}</div>
    </div>
  );
}
