import Header from '../layout/Header';
import Footer from '../layout/Footer';
import StatsGrid from '../shared/StatsGrid';
import ChartCard from '../shared/ChartCard';
import Timeline from '../shared/Timeline';
import StudentCard from './StudentCard';
import PipelineTable from './PipelineTable';
import ActionItems from './ActionItems';
import { getAllStudents, adminStats, pipelineData, recentNotes, actionItems } from '../../data/students';

export default function AdminDashboard() {
  const students = getAllStudents();

  return (
    <>
      <Header
        title="Tutoring Admin Dashboard"
        subtitle="Bright Horizons Tutoring | All Students"
        meta={[
          <><strong>Last Updated:</strong> February 9, 2026</>,
          <><strong>Active Students:</strong> 6</>,
          <><strong>Programs:</strong> Academic + Guitar</>,
        ]}
      />
      <div className="container">
        <StatsGrid stats={adminStats} />

        <h2 style={{ fontFamily: 'palatino, georgia, serif', fontWeight: 400, color: 'var(--sage-dark)', marginBottom: '1.5rem' }}>
          All Students
        </h2>
        <div className="student-grid">
          {students.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
        </div>

        <ChartCard icon="📊" title="Data Pipeline Status" fullWidth style={{ marginTop: '2rem' }}>
          <PipelineTable data={pipelineData} />
        </ChartCard>

        <ChartCard icon="📝" title="Recent Session Notes" fullWidth style={{ marginTop: '1.5rem' }}>
          <Timeline items={recentNotes} />
        </ChartCard>

        <ActionItems items={actionItems} />
      </div>
      <Footer lastUpdated="February 9, 2026" studentCount={6} />
    </>
  );
}
