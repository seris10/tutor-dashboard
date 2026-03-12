export default function AnalysisCard({ title, type, style, children }) {
  return (
    <div className="analysis-card">
      <div className={`analysis-header ${type || ''}`} style={style}>
        {title}
      </div>
      <div className="analysis-body">
        {children}
      </div>
    </div>
  );
}
