import '@testing-library/jest-dom';
import { vi } from 'vitest';

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  writable: true,
  value: vi.fn(() => ({})),
});

vi.mock('react-chartjs-2', () => {
  const NullChart = () => null;
  return {
    Chart: NullChart,
    Line: NullChart,
    Bar: NullChart,
    Radar: NullChart,
    Pie: NullChart,
    Doughnut: NullChart,
    PolarArea: NullChart,
  };
});
