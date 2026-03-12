/**
 * Dashboard Charts - Shared Chart.js Configuration
 * Tutoring Dashboard System
 */

// Color palette matching CSS variables
export const chartColors = {
  sage: '#265c2f',
  sageDark: '#0f2f1d',
  sageLight: '#487c42',
  sageLighter: '#6b8861',
  gold: '#c4a35a',
  danger: '#a65d4c',
  success: '#3d7a47',
  purple: '#7b5c8f',
  cream: '#f5f1e8',
  line: '#e7e1cf',
};

// Get color based on percentage value
export function getScoreColor(pct) {
  if (pct >= 70) return chartColors.success;
  if (pct >= 50) return chartColors.gold;
  return chartColors.danger;
}

// Get CSS class for skill bar fill
export function getSkillClass(pct) {
  if (pct >= 70) return 'high';
  if (pct >= 50) return 'medium';
  return 'low';
}

// Get polar area color based on value
export function getPolarColor(val) {
  if (val >= 70) return 'rgba(61, 122, 71, 0.7)';
  if (val >= 50) return 'rgba(196, 163, 90, 0.7)';
  return 'rgba(166, 93, 76, 0.7)';
}

// Rich tooltip configuration for skill charts
export function createSkillTooltipConfig(skillExamples) {
  return {
    enabled: true,
    backgroundColor: 'rgba(253, 252, 249, 0.99)',
    titleColor: '#265c2f',
    bodyColor: '#2d3a2d',
    borderColor: '#c4a35a',
    borderWidth: 2,
    padding: { top: 14, bottom: 14, left: 18, right: 18 },
    cornerRadius: 10,
    titleFont: { size: 18, weight: 'bold' },
    bodyFont: { size: 14, lineHeight: 1.5 },
    displayColors: false,
    boxPadding: 8,
    callbacks: {
      title(items) {
        return items[0].label + '  -  ' + items[0].raw + '%';
      },
      afterTitle() {
        return '━━━━━━━━━━━━━━━━━━━━━━━━━━━';
      },
      label(item) {
        const skill = skillExamples[item.label];
        if (skill) {
          return [
            '',
            '  EXAMPLE FROM STUDENT WORK:',
            '',
            '    ' + skill.example,
            '',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '  Source: ' + skill.source,
          ];
        }
        return '';
      },
    },
  };
}

// Default chart font config
export const defaultFont = {
  family: "'Gentium Plus', Georgia, serif",
  color: '#2d3a2d',
};
