import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudent } from '../../data/students';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import StatsGrid from '../shared/StatsGrid';
import TabNav from '../layout/TabNav';
import EmptyState from '../shared/EmptyState';
import OverviewTab from './OverviewTab';
import SubjectsTab from './SubjectsTab';
import SkillsTab from './SkillsTab';
import AssignmentsTab from './AssignmentsTab';
import InsightsTab from './InsightsTab';
import RecommendationsTab from './RecommendationsTab';
import TrustTab from './TrustTab';
import AcademicTab from './AcademicTab';
import InterestsTab from './InterestsTab';
import SessionsTab from './SessionsTab';
import NotesTab from './NotesTab';

const tabComponents = {
  overview: OverviewTab,
  subjects: SubjectsTab,
  skills: SkillsTab,
  assignments: AssignmentsTab,
  insights: InsightsTab,
  recommendations: RecommendationsTab,
  trust: TrustTab,
  academic: AcademicTab,
  interests: InterestsTab,
  sessions: SessionsTab,
  notes: NotesTab,
  plan: RecommendationsTab,
};

export default function StudentDashboard() {
  const { id } = useParams();
  const student = getStudent(id);
  const [activeTab, setActiveTab] = useState(student?.tabs?.[0]?.id || 'overview');

  if (!student) {
    return (
      <>
        <Header title="Student Data Dashboard" subtitle="Student Not Found" />
        <div className="container">
          <EmptyState icon="🔍" title="Student Not Found" message={`No student found with ID "${id}".`} />
        </div>
        <Footer showBackLink />
      </>
    );
  }

  const meta = [];
  if (student.meta.analysisDate) meta.push(<><strong>Analysis Date:</strong> {student.meta.analysisDate}</>);
  if (student.meta.dateRange) meta.push(<><strong>Date Range:</strong> {student.meta.dateRange}</>);
  if (student.meta.assignmentCount) meta.push(<><strong>Assignments:</strong> {student.meta.assignmentCount} documents</>);
  if (student.meta.sessionCount) meta.push(<><strong>Sessions:</strong> {student.meta.sessionCount} completed</>);
  if (student.meta.program) meta.push(<><strong>Program:</strong> {student.meta.program}</>);
  if (student.meta.status) meta.push(<><strong>Status:</strong> {student.meta.status}</>);

  const ActiveTabComponent = tabComponents[activeTab];

  return (
    <>
      <Header
        title="Student Data Dashboard"
        subtitle={`${student.name} | ${student.grade}`}
        meta={meta}
      />
      <div className="container">
        {student.tabs.length > 1 && (
          <TabNav tabs={student.tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        )}
        <StatsGrid stats={student.stats} />
        {ActiveTabComponent && <ActiveTabComponent student={student} />}
      </div>
      <Footer
        lastUpdated={student.lastUpdated}
        showBackLink
      />
    </>
  );
}
