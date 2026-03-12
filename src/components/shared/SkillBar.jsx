import { getSkillClass } from '../../data/chartHelpers';

export default function SkillBar({ label, value, descriptor }) {
  const level = getSkillClass(value);
  const displayWidth = value === 0 ? 5 : value;

  return (
    <div className="skill-item">
      <div className="skill-label">
        <span>{label}</span>
        <span>{descriptor || `${value}%`}</span>
      </div>
      <div className="skill-bar">
        <div className={`skill-fill ${level}`} style={{ width: `${displayWidth}%` }} />
      </div>
    </div>
  );
}
