import { render, screen } from '@testing-library/react';
import StatCard from '../components/shared/StatCard';

describe('StatCard', () => {
  it('renders value, label, and icon', () => {
    render(<StatCard icon="📄" value={60} label="Assignments" />);
    expect(screen.getByText('📄')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
    expect(screen.getByText('Assignments')).toBeInTheDocument();
  });

  it('renders string values', () => {
    render(<StatCard icon="📐" value="48%" label="Math" />);
    expect(screen.getByText('48%')).toBeInTheDocument();
  });
});
