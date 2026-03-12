import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import StudentDashboard from '../components/student/StudentDashboard';

function renderWithRoute(id) {
  return render(
    <MemoryRouter initialEntries={[`/student/${id}`]}>
      <Routes>
        <Route path="/student/:id" element={<StudentDashboard />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('StudentDashboard', () => {
  it('renders Maya dashboard', () => {
    renderWithRoute('maya');
    expect(screen.getAllByText(/Maya Torres Garcia/).length).toBeGreaterThan(0);
    expect(screen.getByText('Assignments')).toBeInTheDocument();
  });

  it('renders Jordan dashboard', () => {
    renderWithRoute('jordan');
    expect(screen.getAllByText(/Jordan K\./).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Sessions/).length).toBeGreaterThan(0);
  });

  it('renders 404 for unknown student', () => {
    renderWithRoute('unknown');
    expect(screen.getAllByText('Student Not Found').length).toBeGreaterThan(0);
  });

  it('renders Carmen with pending state', () => {
    renderWithRoute('carmen');
    expect(screen.getAllByText(/Carmen/).length).toBeGreaterThan(0);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
});
