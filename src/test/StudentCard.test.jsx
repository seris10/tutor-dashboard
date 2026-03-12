import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudentCard from '../components/admin/StudentCard';

const mockStudent = {
  id: 'maya',
  name: 'Maya Torres Garcia',
  grade: '6th Grade',
  status: 'active',
  programs: ['academic', 'guitar'],
  engagement: { total: '20+', recent: 3, last: 'Feb 8' },
  progress: '60 assignments, 55% avg',
  dataMaturity: { profile: true, quantified: true },
};

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe('StudentCard', () => {
  it('renders student name and grade', () => {
    renderWithRouter(<StudentCard student={mockStudent} />);
    expect(screen.getByText('Maya Torres Garcia')).toBeInTheDocument();
    expect(screen.getByText('6th Grade')).toBeInTheDocument();
  });

  it('renders program badges', () => {
    renderWithRouter(<StudentCard student={mockStudent} />);
    expect(screen.getByText('Academic')).toBeInTheDocument();
    expect(screen.getByText('Guitar')).toBeInTheDocument();
  });

  it('renders engagement values', () => {
    renderWithRouter(<StudentCard student={mockStudent} />);
    expect(screen.getByText('20+')).toBeInTheDocument();
    expect(screen.getByText('Feb 8')).toBeInTheDocument();
  });

  it('links to student page', () => {
    renderWithRouter(<StudentCard student={mockStudent} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/student/maya');
  });

  it('shows filled maturity dots when data exists', () => {
    const { container } = renderWithRouter(<StudentCard student={mockStudent} />);
    const filledDots = container.querySelectorAll('.maturity-dot.filled');
    expect(filledDots.length).toBe(2);
  });
});
