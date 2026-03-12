export default function QuoteBox({ text, attribution, children }) {
  return (
    <div className="quote-box">
      {children || text}
      {attribution && <div className="quote-attribution">{attribution}</div>}
    </div>
  );
}
