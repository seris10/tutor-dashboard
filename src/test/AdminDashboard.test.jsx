import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdminDashboard from '../components/admin/AdminDashboard';

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe('AdminDashboard', () => {
  it('renders the header', () => {
    renderWithRouter(<AdminDashboard />);
    expect(screen.getByText('Tutoring Admin Dashboard')).toBeInTheDocument();
  });

  it('renders all 6 student cards', () => {
    renderWithRouter(<AdminDashboard />);
    expect(screen.getAllByText('Maya Torres Garcia').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Jordan K.').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Luna/).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Sofia').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Carmen').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Priya').length).toBeGreaterThan(0);
  });

  it('renders stats grid', () => {
    renderWithRouter(<AdminDashboard />);
    expect(screen.getByText('Total Students')).toBeInTheDocument();
    expect(screen.getAllByText('6').length).toBeGreaterThan(0);
  });

  it('renders pipeline table', () => {
    renderWithRouter(<AdminDashboard />);
    expect(screen.getByText('Data Pipeline Status')).toBeInTheDocument();
  });
});
