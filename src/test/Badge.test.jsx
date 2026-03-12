import { render, screen } from '@testing-library/react';
import Badge from '../components/shared/Badge';

describe('Badge', () => {
  it('renders with correct CSS class', () => {
    render(<Badge type="math">Math</Badge>);
    const badge = screen.getByText('Math');
    expect(badge).toHaveClass('badge', 'badge-math');
  });

  it('renders different badge types', () => {
    const { rerender } = render(<Badge type="success">Good</Badge>);
    expect(screen.getByText('Good')).toHaveClass('badge-success');

    rerender(<Badge type="danger">Low</Badge>);
    expect(screen.getByText('Low')).toHaveClass('badge-danger');
  });
});
