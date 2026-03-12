import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import StudentDashboard from './components/student/StudentDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/student/:id" element={<StudentDashboard />} />
    </Routes>
  );
}
