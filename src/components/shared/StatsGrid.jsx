import StatCard from './StatCard';

export default function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <StatCard key={i} icon={stat.icon} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
