export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <div className="timeline-date">{item.date}</div>
            <strong>{item.title}</strong>
            {item.content && <p style={{ fontSize: '0.9rem' }}>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
