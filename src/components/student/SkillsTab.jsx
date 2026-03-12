import ChartCard from '../shared/ChartCard';
import SkillBar from '../shared/SkillBar';

const skillSections = {
  math: { icon: '📐', title: 'Math Skills Breakdown' },
  ela: { icon: '📖', title: 'ELA/Reading Skills' },
  science: { icon: '🔬', title: 'Science Skills' },
  history: { icon: '🏛️', title: 'History Skills' },
};

export default function SkillsTab({ student }) {
  if (!student.skills) return null;

  return (
    <div className="dashboard-grid">
      {Object.entries(student.skills).map(([key, skills]) => {
        const section = skillSections[key];
        if (!section) return null;
        return (
          <ChartCard key={key} icon={section.icon} title={section.title}>
            {skills.map((skill, i) => (
              <SkillBar key={i} label={skill.label} value={skill.value} descriptor={skill.descriptor} />
            ))}
          </ChartCard>
        );
      })}
    </div>
  );
}
