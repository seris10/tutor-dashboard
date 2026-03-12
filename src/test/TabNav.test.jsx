import { render, screen, fireEvent } from '@testing-library/react';
import TabNav from '../components/layout/TabNav';

describe('TabNav', () => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'skills', label: 'Skills' },
    { id: 'plan', label: 'Plan' },
  ];

  it('renders all tabs', () => {
    render(<TabNav tabs={tabs} activeTab="overview" onTabChange={() => {}} />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Plan')).toBeInTheDocument();
  });

  it('marks active tab', () => {
    render(<TabNav tabs={tabs} activeTab="skills" onTabChange={() => {}} />);
    expect(screen.getByText('Skills')).toHaveClass('active');
    expect(screen.getByText('Overview')).not.toHaveClass('active');
  });

  it('calls onTabChange on click', () => {
    const onTabChange = vi.fn();
    render(<TabNav tabs={tabs} activeTab="overview" onTabChange={onTabChange} />);
    fireEvent.click(screen.getByText('Plan'));
    expect(onTabChange).toHaveBeenCalledWith('plan');
  });
});
