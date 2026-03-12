export default function RecommendationCard({ priority, title, description }) {
  return (
    <div className="recommendation-card">
      <span className={`priority-tag priority-${priority}`}>
        {priority === 'high' ? 'High Priority' : priority === 'medium' ? 'Medium Priority' : 'Lower Priority'}
      </span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
