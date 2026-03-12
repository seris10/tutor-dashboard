import { render, screen } from '@testing-library/react';
import SkillBar from '../components/shared/SkillBar';

describe('SkillBar', () => {
  it('renders label and percentage', () => {
    render(<SkillBar label="GCF" value={100} />);
    expect(screen.getByText('GCF')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('applies high class for values >= 70', () => {
    const { container } = render(<SkillBar label="Test" value={75} />);
    expect(container.querySelector('.skill-fill.high')).toBeInTheDocument();
  });

  it('applies medium class for values 50-69', () => {
    const { container } = render(<SkillBar label="Test" value={55} />);
    expect(container.querySelector('.skill-fill.medium')).toBeInTheDocument();
  });

  it('applies low class for values < 50', () => {
    const { container } = render(<SkillBar label="Test" value={30} />);
    expect(container.querySelector('.skill-fill.low')).toBeInTheDocument();
  });

  it('renders custom descriptor', () => {
    render(<SkillBar label="Operations" value={60} descriptor="Functional" />);
    expect(screen.getByText('Functional')).toBeInTheDocument();
  });
});
