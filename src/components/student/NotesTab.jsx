import ChartCard from '../shared/ChartCard';
import QuoteBox from '../shared/QuoteBox';

export default function NotesTab({ student }) {
  // Luna notes
  if (student.id === 'luna') {
    return (
      <>
        <ChartCard icon="📝" title="From Feb 7 Debrief" fullWidth>
          {student.quotes.map((q, i) => (
            <QuoteBox key={i} text={q.text} attribution={q.attribution} />
          ))}
        </ChartCard>
        <ChartCard icon="🔐" title="Prior Trust Context" fullWidth style={{ marginTop: '1.5rem' }}>
          {student.trustContext.map((q, i) => (
            <QuoteBox key={i} text={q.text} attribution={q.attribution} />
          ))}
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            <strong>Note:</strong> {student.trustNote}
          </p>
        </ChartCard>
      </>
    );
  }

  // Sofia notes
  if (student.id === 'sofia') {
    return (
      <ChartCard icon="📝" title="From First Session Debrief" fullWidth>
        {student.quotes.map((q, i) => (
          <QuoteBox key={i} text={q.text} attribution={q.attribution} />
        ))}
      </ChartCard>
    );
  }

  return null;
}
