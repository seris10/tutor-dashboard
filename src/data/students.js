/**
 * Student Data - Extracted from HTML dashboards
 * Sample data with fictional student names and details.
 * All identifying information has been anonymized.
 */

import { chartColors, createSkillTooltipConfig } from './chartHelpers';

// ─────────────────────────────────────────────────
// MAYA TORRES GARCIA
// ─────────────────────────────────────────────────

const mathSkillExamples = {
  GCF: {
    example:
      'Maya correctly listed all factors of 24 and 36, then identified the greatest common factor as 12. She showed systematic work: "24: 1,2,3,4,6,12 and 36: 1,2,3,4,6,9,12,18,36. GCF = 12" ✓',
    source: 'Topic Quiz A-1',
  },
  'Ratio Tables': {
    example:
      'Given a ratio table with 2:5, Maya correctly extended the pattern to complete all missing values: 2→4→6→8 and 5→10→15→20. She identified the multiplicative relationship and applied it consistently.',
    source: 'Practice 8',
  },
  'Tape Diagrams': {
    example:
      'For "boys to girls ratio is 3:2 with 15 boys," Maya drew the tape diagram correctly with 3 boxes for boys and 2 for girls. She found each box = 5 students and concluded 10 girls. ✓',
    source: 'Practice 7',
  },
  'Ratio Notation': {
    example:
      'Maya can write ratios in colon form (5:3) but sometimes struggles with verbal form. She wrote "5 and 3" instead of "5 to 3" on one problem. Also inconsistent with fraction notation (5/3).',
    source: 'Practice 7',
  },
  'Coord Plot': {
    example:
      'Mixed results on coordinate plotting. Maya correctly plotted (3,6) but reversed (4,2) as (2,4) - she went up first, then right. This x/y confusion appeared on 3 of 8 coordinate problems.',
    source: 'Practice 7',
  },
  Fractions: {
    example:
      'Problem: "Which is greater, 3/4 or 5/6?" Maya answered "3/4 is bigger" without finding common denominators. Correct: 5/6 is larger (9/12 < 10/12). This foundational gap cascades into ratio/percent struggles.',
    source: 'Practice 8',
  },
  'Unit Rates': {
    example:
      'Problem: "6 pastries take 60 seconds to microwave. How long for 12?" Maya wrote "it will take 3 seconds" ✗. She divided instead of recognizing the doubling pattern. Correct answer: 120 seconds.',
    source: 'Practice 8',
  },
  'Word Problems': {
    example:
      'Problem: "Red and white beads in ratio 3:10. How many white beads for 39 red beads?" Maya wrote "he need 8" ✗. She didn\'t recognize the scaling: 39÷3=13, so 13×10=130 white beads.',
    source: 'Practice 9',
  },
  LCM: {
    example:
      'Maya confused LCM with GCF on the quiz. When asked for the LCM of 4 and 6, she wrote "2" (the GCF) instead of "12" (the LCM). This GCF/LCM confusion appeared consistently.',
    source: 'Topic Quiz A-1',
  },
  Percent: {
    example:
      'The entire percent worksheet (Practice 26) was left completely blank. This suggests avoidance of unfamiliar problem formats rather than attempted errors. Same pattern on Topic Quiz E-1 (percent representations).',
    source: 'Practice 26',
  },
};

const readingSkillExamples = {
  'Emotion Recog': {
    example:
      'Given a paragraph describing a character pacing back and forth, checking the clock repeatedly, and biting their nails, Maya correctly identified the emotion as "anxious" and cited the behavioral clues as her evidence. Strong inference skills.',
    source: 'Emotion Identification',
  },
  Pronouns: {
    example:
      'Correctly identified subject vs. object pronouns in sentences like "She gave the book to him" (she=subject, him=object). Scored 7/9 overall. Minor errors with reflexive pronouns (herself/themselves).',
    source: 'Grammar Practice',
  },
  'Personal Conn': {
    example:
      'After reading a growth mindset article, Maya wrote this annotation: "asking for help does not mean you\'re dumb, it means your learning more of what you don\'t know." Shows genuine personal synthesis and self-application of the text.',
    source: 'Why Your Mindset Matters (Newsela)',
  },
  'Main Idea': {
    example:
      'After reading about Hammurabi\'s Code, Maya wrote: "The main idea is that Hammurabi created the first written laws to keep order in Babylon and protect the weak from the strong." Clear, accurate central idea extraction with supporting detail.',
    source: 'Central Idea Graphic Organizer',
  },
  Annotation: {
    example:
      'While reading about Ancient Egypt, Maya highlighted key details and wrote margin notes: "First women ruler was Hatshepsut. She took care of her people but made a rule about a god care not marry an mortal." Captures main ideas with personal voice.',
    source: 'Ancient Egypt (Newsela)',
  },
  Summary: {
    example:
      'Maya summarized the Fertile Crescent article: "The Fertile Crescent was good for farming because of the Tigris and Euphrates rivers. This is where the first civilizations started and people learned to grow crops." Captures key points in own words.',
    source: 'Fertile Crescent (Newsela)',
  },
  Affixes: {
    example:
      'Maya correctly identified "un-" as meaning "not" (unhappy = not happy ✓), but struggled with suffixes. She wrote that "-tion" means "full of" when it actually means "act or state of" (celebration = act of celebrating). This suffix confusion appeared across 4 separate assessments.',
    source: 'Practice Summative - Affixes',
  },
};

const allSkillExamples = {
  GCF: { pct: 100, example: 'Maya correctly listed all factors of 24 and 36, then identified the greatest common factor as 12. She showed her work: "24: 1,2,3,4,6,12 and 36: 1,2,3,4,6,9,12,18,36. GCF = 12" ✓', source: 'Topic Quiz A-1' },
  'Early Humans': { pct: 100, example: 'Asked "Would you rather be a Paleolithic or Neolithic human?" Maya wrote: "I would rather be a Neolithic human because they had better food, shelter, and they could stay in one place instead of always moving around." Shows strong comparative reasoning.', source: 'Who Would You Rather Be?' },
  Annotation: { pct: 85, example: 'While reading about Ancient Egypt, Maya highlighted key details and wrote margin notes: "First women ruler was Hatshepsut. She took care of her people but made a rule about a god care not marry an mortal." Captures main ideas with personal voice.', source: 'Ancient Egypt (Newsela)' },
  'Emotion ID': { pct: 80, example: 'Given a paragraph describing a character pacing, checking the clock, and biting their nails, Maya correctly identified the emotion as "anxious" and cited the behavioral clues as evidence.', source: 'Emotion Identification' },
  'Main Idea': { pct: 80, example: 'After reading about Hammurabi\'s Code, Maya wrote: "The main idea is that Hammurabi created the first written laws to keep order in Babylon." Clear, accurate central idea extraction.', source: 'Central Idea Graphic Organizer' },
  Pronouns: { pct: 78, example: 'Correctly identified subject vs. object pronouns in sentences like "She gave the book to him" (she=subject, him=object). Minor errors with reflexive pronouns (herself/themselves).', source: 'Grammar Practice' },
  'Ratio Tables': { pct: 75, example: 'Given a table with ratio 2:5, Maya correctly extended the pattern: 2→4→6→8 and 5→10→15→20. She identified the multiplicative relationship and applied it consistently.', source: 'Practice 8' },
  Summary: { pct: 75, example: 'Summarized a Newsela article about the Fertile Crescent: "The Fertile Crescent was good for farming because of the rivers. This is where the first civilizations started." Captures key points in own words.', source: 'Fertile Crescent (Newsela)' },
  'Cell Bio': { pct: 44, example: 'On the cell anatomy assessment, Maya confused the nucleus and mitochondria. She wrote that mitochondria is "the brain of the cell" (should be nucleus) and that the nucleus "gives the cell energy" (should be mitochondria).', source: 'Cell Anatomy Assessment' },
  Affixes: { pct: 39, example: 'Maya correctly identified "un-" as meaning "not" (unhappy = not happy ✓), but struggled with suffixes. She wrote that "-tion" means "full of" when it actually means "act or state of." This pattern repeated across multiple affix assessments.', source: 'Practice Summative - Affixes' },
  Fractions: { pct: 38, example: 'Problem: "Which is greater, 3/4 or 5/6?" Maya answered "3/4 is bigger" without finding common denominators. The correct answer is 5/6 (converting: 9/12 < 10/12). This foundational gap affects her ratio and percent work.', source: 'Practice 8' },
  Vocab: { pct: 33, example: 'On the Mesopotamia vocabulary matching, Maya correctly matched only 3 of 9 terms. She confused "ziggurat" with "irrigation" and left "cuneiform" and "city-state" blank. Vocabulary retention is a cross-subject challenge.', source: 'Mesopotamia Vocabulary Chart' },
  Percent: { pct: 0, example: 'The entire percent worksheet (Practice 26) was left completely blank. This suggests avoidance of unfamiliar problem formats rather than attempted errors. Pattern: 17 unanswered problems total, mostly in percent and science.', source: 'Practice 26 - Percent' },
};

const mayaAssignments = [
  { date: '9/9', name: 'Practice 7 - Ratios & Coordinate Plane', subject: 'math', score: 'Mixed', scoreType: 'warning', notes: '😊 "Great Work!" - tape diagrams ✓, plotting errors' },
  { date: '9/10', name: 'Practice 8 - Ratio Tables & Graphs', subject: 'math', score: 'Mixed', scoreType: 'warning', notes: '⭐ "Fantastic!" - tables ✓, word problems weak' },
  { date: '9/11', name: 'Practice 9 - Ratio Tables', subject: 'math', score: 'Mixed', scoreType: 'warning', notes: '🐸 "Super Job!" - scaling errors (8 vs 130)' },
  { date: '10/2', name: 'Cell Anatomy Assessment', subject: 'science', score: '4/5 (80%)', scoreType: 'success', notes: 'Confused nucleus/mitochondria analogy' },
  { date: '10/2', name: 'Practice 19 - Unit Conversions', subject: 'math', score: '~60%', scoreType: 'warning', notes: '11/11 conversions ✓, 5 word problems blank' },
  { date: '10/17', name: 'Topic Quiz D - Ratios & Rates', subject: 'math', score: 'Good', scoreType: 'success', notes: 'Self-corrected errors, unit rate understanding' },
  { date: '10/20', name: 'Gospel Reflection (Luke 12)', subject: 'religion', score: 'Complete', scoreType: 'success', notes: 'Thoughtful personal application' },
  { date: '-', name: 'Who Would You Rather Be?', subject: 'history', score: '4/4 (100%)', scoreType: 'success', notes: 'Excellent scenario reasoning' },
  { date: '-', name: 'Human Migration Routes', subject: 'history', score: '~40%', scoreType: 'warning', notes: 'Some phases incomplete' },
  { date: '-', name: 'Human Migration Challenge', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Map activity finished' },
  { date: '-', name: 'Ancient Egypt: Women (Newsela)', subject: 'history', score: 'Good', scoreType: 'success', notes: 'Strong annotations, engaged' },
  { date: '-', name: "Hammurabi's Code (Newsela)", subject: 'history', score: 'Good', scoreType: 'success', notes: 'Clear summarization' },
  { date: '-', name: 'Fertile Crescent (Newsela)', subject: 'history', score: 'Good', scoreType: 'success', notes: 'Reading comprehension' },
  { date: '-', name: 'Ancient Egypt Project', subject: 'history', score: 'In Progress', scoreType: 'secondary', notes: 'Topic chosen: Seth' },
  { date: '-', name: 'Why Your Mindset Matters (Newsela)', subject: 'ela', score: 'Good', scoreType: 'success', notes: 'Personal connection evident' },
  { date: '-', name: "Emperor's New Clothes", subject: 'ela', score: 'Good', scoreType: 'success', notes: 'Theme comprehension' },
  { date: '-', name: 'Affix Assessment 4', subject: 'ela', score: '3/4 (75%)', scoreType: 'success', notes: 'Good vocabulary understanding' },
  { date: '-', name: 'Emotion Identification', subject: 'ela', score: '5/5 (100%)', scoreType: 'success', notes: 'Excellent descriptive recognition' },
  { date: '-', name: 'Eureka Fluency Do Now', subject: 'math', score: '5/5 Tue only', scoreType: 'warning', notes: 'Other days incomplete' },
  { date: '-', name: 'Practice 26 - Percent', subject: 'math', score: 'Not Attempted', scoreType: 'danger', notes: 'Entire worksheet blank' },
  { date: '-', name: 'Topic Quiz B-2', subject: 'math', score: '~67%', scoreType: 'warning', notes: 'Division estimation good' },
  { date: '-', name: 'Topic Quiz A-1', subject: 'math', score: '~40%', scoreType: 'danger', notes: 'GCF/LCM confusion' },
  { date: '11/6', name: 'Module Assessment 2', subject: 'math', score: 'Mixed', scoreType: 'warning', notes: 'Ratios, percent, unit rates - varied' },
  { date: '-', name: 'Scripture Test Review', subject: 'religion', score: 'Not Started', scoreType: 'secondary', notes: 'Study guide (optional)' },
  { date: '-', name: 'Metric Measurements', subject: 'math', score: 'Errors', scoreType: 'warning', notes: 'Ordering measurements by size' },
  { date: '-', name: 'A Day in the Life in Sumer - Stations', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Stations activity with multiple tasks' },
  { date: '-', name: 'Mesopotamia Vocabulary Chart', subject: 'history', score: '33%', scoreType: 'warning', notes: 'Vocabulary matching struggles' },
  { date: '-', name: 'Mesopotamia Map Activity', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Geography and map skills' },
  { date: '-', name: 'GRAPES Civilization Project', subject: 'history', score: 'In Progress', scoreType: 'secondary', notes: 'Multi-part civilization project' },
  { date: '-', name: 'City-State Problem and Solutions', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Problem-solving activity' },
  { date: '-', name: 'Sumer Stations - Cuneiform Words', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Writing practice' },
  { date: '-', name: 'Sumer Stations - Religion in Sumer', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Religious concepts' },
  { date: '-', name: "Hammurabi's Code Graphic Organizer", subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Legal code analysis' },
  { date: '-', name: 'Writing in Cuneiform', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Cuneiform practice' },
  { date: '-', name: 'Mesopotamia Quiz', subject: 'history', score: 'Partial', scoreType: 'warning', notes: 'Partial results available' },
  { date: '-', name: 'Darius the Great - Historical Resume', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Biography research' },
  { date: '-', name: 'Cyrus the Great - Historical Resume', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Biography research' },
  { date: '-', name: 'Lascaux Cave Art - Virtual Tour', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Virtual field trip' },
  { date: '-', name: 'Create Your Own Cave Art', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Art activity' },
  { date: '-', name: 'Early Humans Review Guide', subject: 'history', score: '100%', scoreType: 'success', notes: 'Strong comparison skills' },
  { date: '-', name: 'Notes: Eras and First Humans', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Note-taking activity' },
  { date: '-', name: 'Which Era Is This Dish From?', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Era identification' },
  { date: '-', name: 'Neolithic Era Restaurant Menu', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Creative project' },
  { date: '-', name: 'Timeline of Epochs', subject: 'history', score: 'Complete', scoreType: 'success', notes: 'Timeline activity' },
  { date: '-', name: 'Emotion Identification (Paragraphs 1-5)', subject: 'ela', score: '80%', scoreType: 'success', notes: 'Strong emotion recognition' },
  { date: '-', name: 'Central Idea Graphic Organizer', subject: 'ela', score: 'Complete', scoreType: 'success', notes: 'Main idea practice' },
  { date: '-', name: 'Writing the Central Idea', subject: 'ela', score: 'Complete', scoreType: 'success', notes: 'Writing practice' },
  { date: '-', name: 'Article Response - Music & Emotion', subject: 'ela', score: 'Complete', scoreType: 'success', notes: 'Article response' },
  { date: '-', name: 'Essay - Ancient Egypt Women', subject: 'ela', score: 'Complete', scoreType: 'success', notes: 'Essay writing' },
  { date: '-', name: 'Do Now Journal (8/25-8/29)', subject: 'ela', score: 'Complete', scoreType: 'success', notes: 'Journal entries' },
  { date: '-', name: 'Do Now Journal (9/2-9/5)', subject: 'ela', score: 'Complete', scoreType: 'success', notes: 'Journal entries' },
  { date: '-', name: 'Practice Summative - Affixes', subject: 'ela', score: '39%', scoreType: 'danger', notes: 'Persistent affix struggles' },
  { date: '-', name: 'Topic Quiz E-1 (Percent)', subject: 'math', score: '0%', scoreType: 'danger', notes: 'Percent representations' },
  { date: '-', name: 'Eureka Math Lesson 5 - Tape Diagrams', subject: 'math', score: 'Mixed', scoreType: 'warning', notes: 'Tape diagram practice' },
  { date: '-', name: 'Eureka Math Lesson 9 - Graphing Ratios', subject: 'math', score: 'Mixed', scoreType: 'warning', notes: 'Graphing practice' },
  { date: '-', name: 'Topic Quiz D-1', subject: 'math', score: 'Mixed', scoreType: 'warning', notes: 'Ratio concepts' },
  { date: '-', name: 'Weekly Gospel Reflection - Luke 10:38-42', subject: 'religion', score: 'Complete', scoreType: 'success', notes: 'Thoughtful reflection' },
  { date: '-', name: 'Weekly Gospel Reflection - Luke 11:37-41', subject: 'religion', score: 'Complete', scoreType: 'success', notes: 'Thoughtful reflection' },
  { date: '-', name: 'Old Testament Scavenger Hunt', subject: 'religion', score: 'Complete', scoreType: 'success', notes: 'Bible exploration' },
  { date: '-', name: 'Anatomy of a Cell Review', subject: 'science', score: '44%', scoreType: 'warning', notes: 'Cell biology review' },
  { date: '-', name: 'Onion vs Cheek Cell Lab', subject: 'science', score: 'Partial', scoreType: 'warning', notes: 'Lab observations incomplete' },
  { date: '-', name: 'Onion vs Cheek Cell Lab - Part 2', subject: 'science', score: 'Partial', scoreType: 'warning', notes: 'Lab observations incomplete' },
];

const maya = {
  id: 'maya',
  name: 'Maya Torres Garcia',
  grade: '6th Grade',
  status: 'active',
  programs: ['academic', 'guitar'],
  engagement: { total: '20+', recent: 3, last: 'Feb 8' },
  progress: '60 assignments, 55% avg',
  dataMaturity: { profile: true, quantified: true },
  meta: {
    analysisDate: 'February 5, 2026',
    dateRange: 'Aug 2025 – Feb 2026',
    assignmentCount: 60,
    problemCount: 140,
  },
  stats: [
    { icon: '📄', value: 60, label: 'Assignments' },
    { icon: '📚', value: 140, label: 'Problems' },
    { icon: '📐', value: '48%', label: 'Math' },
    { icon: '🏛️', value: '68%', label: 'History' },
    { icon: '📖', value: '67%', label: 'ELA' },
    { icon: '🔬', value: '36%', label: 'Science' },
    { icon: '✝️', value: 3, label: 'Religion' },
  ],
  tabs: [
    { id: 'overview', label: '📊 Overview' },
    { id: 'subjects', label: '📚 By Subject' },
    { id: 'skills', label: '🎯 Skills' },
    { id: 'assignments', label: '📋 Assignments' },
    { id: 'insights', label: '💡 Insights' },
    { id: 'recommendations', label: '📌 Plan' },
  ],
  charts: {
    subjectBar: {
      labels: ['History', 'ELA', 'Math', 'Science'],
      data: [68, 67, 48, 36],
      colors: [chartColors.gold, chartColors.gold, chartColors.danger, chartColors.danger],
    },
    mathRadar: {
      labels: ['GCF', 'Ratio Tables', 'Tape Diagrams', 'Ratio Notation', 'Coord Plot', 'Fractions', 'Unit Rates', 'Word Problems', 'LCM', 'Percent'],
      data: [100, 75, 70, 50, 45, 38, 33, 30, 0, 0],
      tooltipConfig: createSkillTooltipConfig(mathSkillExamples),
    },
    readingDoughnut: {
      labels: ['Emotion Recog', 'Pronouns', 'Personal Conn', 'Main Idea', 'Annotation', 'Summary', 'Affixes'],
      data: [80, 78, 85, 80, 85, 75, 39],
      colors: [chartColors.success, chartColors.gold, chartColors.sageLight, chartColors.sage, chartColors.sageLighter, chartColors.purple, chartColors.danger],
      tooltipConfig: createSkillTooltipConfig(readingSkillExamples),
    },
    completionPie: {
      labels: ['Complete & Strong', 'Complete w/ Errors', 'Partial', 'Not Attempted'],
      data: [10, 8, 5, 2],
      colors: [chartColors.success, chartColors.gold, chartColors.sageLight, chartColors.danger],
    },
    subjectHorizontal: {
      labels: ['Science', 'Math', 'ELA', 'History'],
      data: [36, 48, 67, 68],
      colors: [chartColors.danger, chartColors.danger, chartColors.gold, chartColors.gold],
    },
    allSkillsPolar: {
      labels: ['GCF', 'Early Humans', 'Annotation', 'Emotion ID', 'Main Idea', 'Pronouns', 'Ratio Tables', 'Summary', 'Cell Bio', 'Affixes', 'Fractions', 'Vocab', 'Percent'],
      data: [100, 100, 85, 80, 80, 78, 75, 75, 44, 39, 38, 33, 0],
      tooltipConfig: createSkillTooltipConfig(allSkillExamples),
    },
    assignmentsBySubject: {
      labels: ['History', 'ELA', 'Math', 'Science', 'Religion'],
      data: [26, 15, 10, 5, 3],
      colors: [chartColors.success, chartColors.gold, chartColors.danger, chartColors.sageLight, chartColors.purple],
    },
    scoreDistribution: {
      labels: ['0-40%', '41-60%', '61-80%', '81-100%'],
      data: [3, 6, 6, 10],
      colors: [chartColors.danger, chartColors.gold, chartColors.sageLight, chartColors.success],
    },
  },
  skills: {
    math: [
      { label: 'GCF / GCF Application', value: 100 },
      { label: 'Ratio Tables', value: 75 },
      { label: 'Tape Diagrams', value: 70 },
      { label: 'Ratio Notation', value: 50 },
      { label: 'Coordinate Plotting', value: 45 },
      { label: 'Fraction Comparison', value: 38 },
      { label: 'Unit Rates', value: 33 },
      { label: 'Ratio Word Problems', value: 30 },
      { label: 'LCM', value: 0 },
      { label: 'Percent', value: 0 },
    ],
    ela: [
      { label: 'Annotation Quality', value: 85 },
      { label: 'Personal Connection', value: 85 },
      { label: 'Emotion Identification', value: 80 },
      { label: 'Main Idea Extraction', value: 80 },
      { label: 'Pronouns (Subj/Obj)', value: 78 },
      { label: 'Summarization', value: 75 },
      { label: 'Extended Response', value: 55 },
      { label: 'Affixes', value: 39 },
    ],
    science: [
      { label: 'Cell Biology', value: 44 },
      { label: 'Systems Interaction', value: 25 },
      { label: 'Cell Organization', value: 0 },
    ],
    history: [
      { label: 'Early Humans Comparison', value: 100 },
      { label: 'Religion Topics', value: 50 },
      { label: 'Social Studies Vocab', value: 33 },
    ],
  },
  subjects: [
    {
      name: 'Mathematics', icon: '📐', pct: 48, type: 'danger',
      strengths: ['GCF (100%)', 'ratio tables (75%)', 'ratio notation (50%)'],
      weaknesses: ['Fraction comparison (37.5%)', 'unit rates (33%)', 'percent (0%)'],
      pattern: 'Avoids unfamiliar problems (17 unanswered)',
      rootCause: 'Fraction comparison cascades into ratio/percent struggles',
    },
    {
      name: 'History', icon: '🏛️', pct: 68, type: 'warning',
      strengths: ['Early humans comparison (100%)', 'narrative reasoning'],
      weaknesses: ['Social studies vocabulary (33%)', 'geography'],
      units: 'Mesopotamia, Sumer, Persian Empire, Early Humans',
      note: '26 documents analyzed across 4 major units',
    },
    {
      name: 'ELA/Reading', icon: '📖', pct: 67, type: 'warning',
      strengths: ['Emotion identification (80%)', 'pronouns (78%)'],
      weaknesses: ['Affixes (38.5% across 13 problems) - persistent gap'],
      pattern: 'Multiple affix assessments show same struggles',
      note: '15 documents including journal entries, essays',
    },
    {
      name: 'Science', icon: '🔬', pct: 36, type: 'danger',
      strengths: [],
      weaknesses: ['Cell biology (44%)', 'systems interaction (25%)', 'Cell organization concepts (0% on 3 problems)'],
      pattern: 'Lab observations often left blank',
      note: 'Lowest performing subject - needs focused support',
    },
    {
      name: 'Religion', icon: '✝️', pct: null, type: 'purple',
      content: 'Gospel Reflections (Luke 10, 11), OT Scavenger Hunt',
      strengths: ['Thoughtful personal application'],
      note: 'Qualitative work - no scored problems to track',
      docs: 3,
    },
  ],
  assignments: mayaAssignments,
  insights: {
    strengths: [
      { text: 'GCF Mastery: 100% on GCF and GCF application problems' },
      { text: 'Early Humans: 100% on comparison reasoning' },
      { text: 'Emotion Recognition: 80% on descriptive detail analysis' },
      { text: 'Pronouns: 78% on subject/object pronouns' },
      { text: 'Ratio Tables: 75% accuracy with pattern completion' },
      { text: 'Engagement: Strong with narrative/historical content' },
    ],
    gaps: [
      { text: 'Fraction Comparison: 37.5% - Root cause for ratio/percent struggles' },
      { text: 'Affixes: 38.5% across 13 problems - persistent gap' },
      { text: 'Social Studies Vocab: 33% - vocabulary matching weak' },
      { text: 'Unit Rates: 33% - application struggles' },
      { text: 'Percent: 0% - complete avoidance' },
      { text: 'Science: 36% overall - lowest performing subject' },
    ],
    patterns: [
      { text: 'Avoidance: 17 unanswered problems (Math and Science)' },
      { text: 'Lab Work: Observations often left blank' },
      { text: 'Vocabulary: Struggles with matching/definitions across subjects' },
      { text: 'Strong with Narrative: History reasoning is solid when story-based' },
      { text: 'Self-Correction: Shows metacognitive awareness' },
    ],
    sampleWork: {
      strengths: [
        { text: '"asking for help does not mean you\'re dumb, it means your learning more of what you don\'t know"', attribution: 'Mindset article annotation showing personal synthesis' },
        { text: '"First women ruler was Hatshepsut. She took care of her people but made a rule about a god care not marry an mortal"', attribution: 'Ancient Egypt annotation showing main idea extraction' },
      ],
      errors: [
        {
          problem: 'How many seconds to microwave 12 frozen pastries? (ratio 6:60)',
          studentAnswer: '"it will take 3 seconds"',
          correct: '120 seconds (12 × 10 = 120)',
          source: 'Practice 8: Misread ratio relationship',
        },
        {
          problem: 'How many white beads for 39 red beads? (ratio 3:10)',
          studentAnswer: '"he need 8"',
          correct: '130 white beads (39 ÷ 3 = 13; 13 × 10 = 130)',
          source: 'Practice 9: Scaling/multiplicative reasoning error',
        },
      ],
    },
    learningProfile: {
      preferred: 'Visual tables, scenario-based reasoning, annotation, choice-based activities, narrative content',
      preferredPct: 85,
      challenge: 'Abstract procedures, scaling ratios, word problem setup, percent, extended writing',
      challengePct: 40,
      engagement: 'High with narrative/history. May avoid unfamiliar math. Responds well to teacher encouragement.',
    },
  },
  recommendations: [
    { priority: 'high', title: '1. Fraction Comparison (37.5%)', description: 'Root cause of ratio/percent struggles. Build foundation with visual models, number lines, and benchmark fractions before advancing.' },
    { priority: 'high', title: '2. Science Support (36%)', description: 'Lowest performing subject. Focus on cell biology vocabulary, lab observation skills, and systems interaction concepts.' },
    { priority: 'high', title: '3. Affixes (38.5%)', description: 'Persistent gap across multiple assessments. Create prefix/suffix reference cards and practice with familiar vocabulary.' },
    { priority: 'medium', title: '4. Unit Rates (33%)', description: 'Build from ratio tables to unit rate concept. Use concrete contexts (price per item, speed) before abstract problems.' },
    { priority: 'medium', title: '5. Vocabulary Strategies', description: "Social studies vocab at 33%. Create personal glossary approach that works across subjects. Use context clues practice." },
    { priority: 'medium', title: '6. Problem Avoidance (17 blank)', description: 'Address pattern of leaving unfamiliar problems blank. Teach "attempt something" mindset with scaffolded supports.' },
    { priority: 'low', title: '7. Percent Introduction', description: 'Currently 0% - complete avoidance. Build from fraction foundation first, then introduce percent as "per hundred."' },
    { priority: 'low', title: '8. Lab Observation Skills', description: 'Science labs often have blank observations. Practice "I notice... I wonder..." format for systematic recording.' },
  ],
  sessionTimeline: [
    { date: 'Sessions 1-3', title: 'Fraction Foundation (37.5%)', content: 'Visual models, number lines, benchmark fractions. Root cause for ratio/percent struggles.' },
    { date: 'Sessions 4-6', title: 'Affix Mastery (38.5%)', content: 'Prefix/suffix cards, word building practice. Address persistent vocabulary gap.' },
    { date: 'Sessions 7-9', title: 'Science Support (36%)', content: 'Cell biology vocabulary, lab observation skills, systems concepts. Lowest subject.' },
    { date: 'Ongoing', title: 'Problem Completion & Vocabulary', content: 'Address 17 blank problems pattern. Cross-subject vocabulary strategies.' },
  ],
  feedback: [
    { emoji: '😊', text: 'Practice 7: "Great Work!"' },
    { emoji: '⭐', text: 'Practice 8: "Fantastic!"' },
    { emoji: '🐸', text: 'Practice 9: "Super Job!"' },
    { emoji: '✓', text: 'Cell Anatomy: 4/5' },
    { emoji: '✓', text: 'Emotion ID: 5/5' },
  ],
  lastUpdated: 'February 5, 2026',
};

// ─────────────────────────────────────────────────
// JORDAN K.
// ─────────────────────────────────────────────────

const jordan = {
  id: 'jordan',
  name: 'Jordan K.',
  grade: '6th Grade',
  status: 'active',
  programs: ['academic'],
  engagement: { total: 7, recent: 3, last: 'Feb 4' },
  progress: 'Foundation work in progress',
  dataMaturity: { profile: true, quantified: false },
  meta: {
    analysisDate: 'February 9, 2026',
    dateRange: 'Jan 2026 - Present',
    sessionCount: 7,
  },
  stats: [
    { icon: '📅', value: 7, label: 'Sessions' },
    { icon: '📈', value: '+4', label: 'Trust Growth' },
    { icon: '🎮', value: 9, label: 'Interests' },
    { icon: '📐', value: 'Low', label: 'Math Found.' },
    { icon: '📖', value: 'Strong', label: 'Reading' },
    { icon: '🧠', value: 'High', label: 'Pattern Rec.' },
  ],
  tabs: [
    { id: 'overview', label: 'Overview' },
    { id: 'trust', label: 'Trust Trajectory' },
    { id: 'academic', label: 'Academic Profile' },
    { id: 'interests', label: 'Interests' },
    { id: 'sessions', label: 'Sessions' },
    { id: 'plan', label: 'Plan' },
  ],
  charts: {
    trustLine: {
      labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'],
      datasets: [{
        label: 'Trust Level',
        data: [3, 5, 6, 8, 4, 6, 7],
        color: chartColors.sage,
        fill: true,
        pointColors: [
          chartColors.sage, chartColors.sage, chartColors.sage, chartColors.success,
          chartColors.danger, chartColors.gold, chartColors.sage,
        ],
        pointRadius: 6,
        pointHoverRadius: 8,
      }],
    },
    trustDetail: {
      labels: ['S1\nJan 3', 'S2\nJan 8', 'S3\nJan 11', 'S4\nJan 15', 'S5\nJan 21', 'S6\nJan 28', 'S7\nFeb 4'],
      datasets: [
        { label: 'Trust', data: [3, 5, 6, 8, 4, 6, 7], color: chartColors.sage, fill: true },
        { label: 'Verbal Output', data: [2, 4, 5, 7, 3, 5, 6], color: chartColors.gold, fill: false, borderDash: [5, 5] },
        { label: 'Eye Contact', data: [2, 3, 4, 7, 3, 5, 6], color: chartColors.sageLight, fill: false, borderDash: [2, 2] },
      ],
    },
    interestRadar: {
      labels: ['Gaming', 'Rocks', 'Fossils', 'Myths', 'Coding', 'Dragons', 'Anime', 'Music'],
      data: [10, 8, 9, 7, 8, 8, 7, 4],
    },
    interestFullRadar: {
      labels: ['Roblox/Games', 'Rocks & Geology', 'Fossils', 'Myths & Folklore', 'Dragons/Dinos', 'Japanese Folklore', 'Coding/GameDev', 'Music/Guitar', 'One Piece'],
      datasets: [
        {
          label: 'Depth',
          data: [10, 8, 9, 7, 9, 6, 7, 3, 7],
          backgroundColor: 'rgba(38, 92, 47, 0.2)',
          borderColor: chartColors.sage,
          borderWidth: 2,
          pointBackgroundColor: chartColors.sage,
        },
        {
          label: 'Engagement',
          data: [10, 9, 9, 8, 9, 6, 9, 4, 8],
          backgroundColor: 'rgba(196, 163, 90, 0.2)',
          borderColor: chartColors.gold,
          borderWidth: 2,
          pointBackgroundColor: chartColors.gold,
        },
      ],
    },
    academicBar: {
      labels: ['Reading (safe)', 'Pattern Rec.', 'Reading (school)', 'Math Found.', 'Math Word Prob.'],
      data: [85, 90, 30, 25, 20],
      colors: [chartColors.success, chartColors.success, chartColors.danger, chartColors.danger, chartColors.danger],
    },
    strengthsRadar: {
      labels: ['Pattern Recognition', 'Abstract Thinking', 'Visual-Spatial', 'Deep Processing', 'Verbal (low-pressure)'],
      data: [95, 85, 85, 90, 80],
      color: chartColors.success,
    },
  },
  observations: [
    { emoji: '🔍', text: 'Identified fossil features adults missed (S4)' },
    { emoji: '💭', text: '"Atoms vibrating and squishing" - abstract thinking' },
    { emoji: '📖', text: 'Read adult-level fossil text fluently (S6)' },
    { emoji: '🎮', text: 'Roblox as academic bridge (coding, math, logic)' },
    { emoji: '📝', text: 'Handwriting improved without instruction (S4)' },
  ],
  trustPhases: [
    { title: 'S1-S2: Establishing Contact', type: 'strength', items: [
      'S1 (3/10): Guarded, testing waters, minimal verbal output',
      'S2 (5/10): Sharing interests, asking questions, more relaxed',
      'Breakthrough: Roblox discovered as entry point',
      'Signal: Coding interest emerged organically',
    ]},
    { title: 'S3-S4: Trust Deepening', type: 'strength', items: [
      'S3 (6/10): Less verbal but deeper engagement; papers intact',
      'S4 (8/10): Initiated ideas, noticeably more eye contact',
      'Breakthrough: Fossil identification, drawing technique',
      'Signal: "Snapped to it" when asked to take out work',
    ]},
    { title: 'S5: Crisis Point', type: 'weakness', items: [
      'S5 (4/10): IEP meeting triggered regression',
      'Pattern: Urgent, dysregulated energy',
      'Context: 30-page deficit-focused report',
      'Response: Session pivoted to stabilization',
    ]},
    { title: 'S6-S7: Reframe', type: 'developing', items: [
      'S6 (6/10): Stable but stressed; homework pressure',
      'S7 (7/10): Continuing recovery, attention anchor working',
      'Discovery: Reading/math disconnect = anxiety, not deficit',
      'Strategy: Reduce homework stress, build foundations',
    ]},
  ],
  mathSkills: [
    { label: 'Operations (procedural)', value: 60, descriptor: 'Functional' },
    { label: 'Multiplication Facts', value: 20, descriptor: 'Not memorized' },
    { label: 'Grouping Concept', value: 10, descriptor: 'Missing' },
    { label: 'Measurement', value: 15, descriptor: 'Lowest area' },
    { label: 'Word Problems', value: 25, descriptor: 'Anxiety blocks' },
  ],
  readingSkills: [
    { label: 'Decoding (sounding out)', value: 85, descriptor: 'Strong' },
    { label: 'Context Clues', value: 80, descriptor: 'Effective' },
    { label: 'Comprehension (interest-based)', value: 85, descriptor: 'Strong' },
    { label: 'Comprehension (school context)', value: 30, descriptor: 'Blocked' },
    { label: 'Articulating meaning', value: 75, descriptor: 'Strong when safe' },
  ],
  criticalFinding: {
    observation: 'Jordan read adult-level fossil text fluently with comprehension. Yet he freezes on math word problems even when numbers are removed. This is not a reading deficit - it\'s an anxiety response triggered by math-adjacent contexts.',
    attribution: 'Key diagnostic finding across all sessions',
    iep: ['Normal vocabulary acquisition', 'Normal oral expression', 'Normal auditory comprehension'],
    classroom: ['1-2 minute response delays', 'Responses sometimes off-topic', 'Appears to struggle with comprehension'],
    conclusion: "The gap isn't ability - it's performance context activating anxiety.",
  },
  interestBridges: [
    { interest: 'Roblox / Video Games', depth: 'Deep', depthType: 'success', engagement: 'High', engType: 'success', bridge: 'Coding, math, logic, design, project management' },
    { interest: 'Rocks & Geology', depth: 'Growing', depthType: 'success', engagement: 'High', engType: 'success', bridge: 'Science, measurement, business (Geovault connection)' },
    { interest: 'Fossils', depth: 'Strong', depthType: 'success', engagement: 'High', engType: 'success', bridge: 'Biology, reading, pattern recognition' },
    { interest: 'Myths & Folklore', depth: 'Moderate', depthType: 'warning', engagement: 'High', engType: 'success', bridge: 'Reading, writing, cultural history' },
    { interest: 'Dragons / Dinosaurs', depth: 'Strong', depthType: 'success', engagement: 'High', engType: 'success', bridge: 'Science, creative writing' },
    { interest: 'Japanese Folklore (kitsune)', depth: 'Moderate', depthType: 'warning', engagement: 'Moderate', engType: 'warning', bridge: 'Cultural literacy, narrative' },
    { interest: 'Coding / Game Dev', depth: 'Emerging', depthType: 'info', engagement: 'High', engType: 'success', bridge: 'Math, logic, literacy, project management' },
    { interest: 'Music / Guitar', depth: 'Nascent', depthType: 'secondary', engagement: 'Unknown', engType: 'secondary', bridge: 'Creative expression, physics' },
    { interest: 'One Piece (anime)', depth: 'Moderate', depthType: 'warning', engagement: 'High', engType: 'success', bridge: 'Narrative, vocabulary' },
  ],
  sessionLog: [
    { session: 'S1', date: '2026-01-03', trust: 'Baseline', trustType: 'secondary', verbal: 'Minimal', eyeContact: 'Low', organization: 'N/A', milestone: 'Pricing, intake, goals set' },
    { session: 'S2', date: '2026-01-08', trust: 'Building', trustType: 'warning', verbal: 'Growing', eyeContact: 'Some', organization: 'Brought materials', milestone: 'Roblox entry point; AI honesty; coding sparked' },
    { session: 'S3', date: '2026-01-11', trust: 'Growing', trustType: 'warning', verbal: 'Less but deeper', eyeContact: 'Improving', organization: 'Papers intact', milestone: 'Code playground; handwriting insight' },
    { session: 'S4', date: '2026-01-15', trust: 'Significant', trustType: 'success', verbal: 'Initiated ideas', eyeContact: 'Noticeably more', organization: '"Snapped to it"', milestone: 'Fossil ID; collisions; breathing; drawing' },
    { session: 'S5', date: '2026-01-21', trust: 'Regression', trustType: 'danger', verbal: 'Decreased', eyeContact: 'Decreased', organization: 'Dysregulated', milestone: 'IEP fallout; identity analysis; strategic framework' },
    { session: 'S6', date: '2026-01-28', trust: 'Stable', trustType: 'warning', verbal: 'Moderate', eyeContact: 'Stable', organization: 'Brought work', milestone: 'Math anxiety reframe; attention anchor' },
    { session: 'S7', date: '2026-02-04', trust: 'Recovering', trustType: 'success', verbal: 'Improving', eyeContact: 'Good', organization: 'Consistent', milestone: 'Continuing foundation work' },
  ],
  whatsWorking: [
    'Low-pressure environment',
    'Interest integration (Roblox, fossils, myths)',
    'Physical objects (rocks, fossils) for grounding',
    'No-consequences framing',
    'Breathing/mindfulness anchors',
    'Casual suggestion over directive',
    'Silence and space',
  ],
  challenges: [
    'Homework consuming session time',
    'Foundational gaps blocking grade-level work',
    'School compliance vs. actual learning needs',
    "Mom's stress about expectations",
    'IEP framing entirely deficit-oriented',
    'Creative expression anxiety',
    'Passion project displaced by homework',
  ],
  recommendations: [
    { priority: 'high', title: '1. Foundational Math via Tactile/Rock Manipulatives', description: 'Multiplication meaning through grouping with physical rocks. "5 groups of 2" with actual objects.' },
    { priority: 'high', title: '2. Homework Stress Reduction', description: 'Deploy helper tools. Completion-focused approach. Reduce session time on grade-level homework.' },
    { priority: 'high', title: '3. Rock Communication System', description: 'Create visual reference card. 4-5 states max. Practice at session start.' },
    { priority: 'medium', title: '4. Trust & Relationship', description: 'Low-pressure, curiosity-led. Breathing/mindfulness check-in. Attention anchor rock.' },
    { priority: 'medium', title: '5. Passion Project', description: 'Protect from homework encroachment. Formalize schedule with visible milestones. Maintain autonomous choice.' },
    { priority: 'medium', title: '6. Full Diagnostic Battery', description: 'Reading: recorded and analyzed, interest-based vs. school-context. Math: gaps mapped systematically.' },
    { priority: 'low', title: '7. Identity Anchoring', description: 'Build "things he\'s good at" beyond games. Geovault booth project. Game design milestones.' },
    { priority: 'low', title: '8. Academic Self-Concept Repair', description: 'Shift from "I\'m bad at school" to "I think differently and that\'s useful."' },
  ],
  theoreticalFramework: [
    { title: 'Self-Determination Theory', color: 'sage-green', items: ['Autonomy: Needs choice and control', 'Competence: Must experience mastery', 'Belonging: Connection through shared interests'] },
    { title: 'Neuroscience of Learning', color: 'sage-green', items: ['Threat response suppresses higher cognition', 'Safe/curious state required for learning', 'Interest-based attention overrides pressure'] },
    { title: 'Key Hypotheses', color: 'sage-green', items: ['Attention follows meaning, not importance', 'Handwriting as protective mechanism', 'Anxiety vs. deficit (reading/math disconnect)'] },
  ],
  lastUpdated: 'February 9, 2026',
};

// ─────────────────────────────────────────────────
// LUNA (LUMINOSA)
// ─────────────────────────────────────────────────

const luna = {
  id: 'luna',
  name: 'Luna (Luminosa)',
  grade: '6th Grade',
  status: 'active',
  programs: ['guitar'],
  engagement: { total: '10+', recent: 1, last: 'Feb 7' },
  progress: 'Skills developing',
  dataMaturity: { profile: false, quantified: false },
  meta: {
    analysisDate: 'February 9, 2026',
    dateRange: '5th Grade - Present',
    program: 'Guitar Club',
  },
  stats: [
    { icon: '🎸', value: 'Guitar', label: 'Program' },
    { icon: '📅', value: '-', label: 'Sessions' },
    { icon: '🎹', value: 'Keyboard', label: 'Instrument' },
    { icon: '⚠️', value: 'Check', label: 'Wellbeing' },
  ],
  tabs: [
    { id: 'overview', label: 'Overview' },
    { id: 'notes', label: 'Notes' },
  ],
  knownContext: [
    'History: Taught during 5th grade year - struggled more and more',
    'Guitar Club: Current participant, more advanced than some',
    'Instrument: Has keyboard at home - could bring to sessions',
    'Trust: Very high with Mr. Rivera - shared things not told to parents',
    'Mom Relationship: Mom trusts Mr. Rivera to mediate difficult conversations',
  ],
  concerns: [
    'Check-in Writing: Felt "coded" - overly positive, not matching observed energy',
    'Possible Pattern: May be writing opposite of how she feels',
    'Social Context: Priya mentioned Luna has no other friends at school',
    'Signal: "Goes to bathroom to sing her heart out" - needs emotional outlet',
    'Prior Issue: Previous trust conversations revealed she "didn\'t trust anyone"',
  ],
  recommendations: [
    { priority: 'high', title: 'Private Check-in', description: "Follow up on check-in writing. Create space for her to share if something's bothering her. Notebook can be written at home too." },
    { priority: 'medium', title: 'More 1:1 Time', description: 'Spent more time with Sofia/Kira last session. Luna and Maya deserve more attention next week.' },
    { priority: 'low', title: 'Document History', description: 'Synthesize observations from 5th grade year into structured profile.' },
  ],
  quotes: [
    { text: 'I was confused by Luminosa\'s writing. She wrote a lot about how she\'s very happy. Or, very lively. There\'s a lot of energy at school. Chaotic... Which right off the bat doesn\'t fully match the energy that I\'ve seen from her.', attribution: '- Mr. Rivera, Feb 7 debrief' },
    { text: 'She is very intelligent, and it felt coded. My suspicion is that she\'s going through things and essentially wrote the opposite because the writing was very like almost over the top how she was expressing just how happy and lively she is.', attribution: '- Mr. Rivera, Feb 7 debrief' },
    { text: 'She knows I can intuit how a kid\'s doing. And my suspicion is she couldn\'t write how she actually feels, because that\'s hard, especially with other people around, but she wanted me to read it as the opposite of what it said.', attribution: '- Mr. Rivera, Feb 7 debrief' },
  ],
  trustContext: [
    { text: 'Her mom set up a meeting just to talk about it, like, for me to mediate the conversation with her and her daughter. And to help me help her understand how her daughter\'s feeling. And then to thank me.', attribution: '- Mr. Rivera, on prior trust relationship' },
  ],
  trustNote: 'Luna and her mom have high trust with Mr. Rivera. She has previously shared things she hadn\'t told her own parents. This relationship should be leveraged carefully for support.',
  lastUpdated: 'February 9, 2026',
};

// ─────────────────────────────────────────────────
// SOFIA
// ─────────────────────────────────────────────────

const sofia = {
  id: 'sofia',
  name: 'Sofia',
  grade: 'New Student',
  status: 'new',
  programs: ['guitar'],
  engagement: { total: 1, recent: 1, last: 'Feb 7' },
  progress: 'Day 1 skills (tab reading, finger picking)',
  dataMaturity: { profile: false, quantified: false },
  meta: {
    analysisDate: 'February 9, 2026',
    dateRange: 'Feb 2026 - Present',
    sessionCount: 1,
  },
  stats: [
    { icon: '📅', value: 1, label: 'Sessions' },
    { icon: '🎸', value: 'Guitar', label: 'Program' },
    { icon: '✍️', value: 'Yes', label: 'Likes Writing' },
    { icon: '🎵', value: 'Interest', label: 'Instruments' },
  ],
  tabs: [
    { id: 'overview', label: 'Overview' },
    { id: 'sessions', label: 'Sessions' },
    { id: 'notes', label: 'Notes' },
  ],
  firstSessionObs: [
    'Learning Style: Picked up quickly - holding guitar, finger picking, tab reading all in one day',
    'Communication: Shy verbally but expressive through writing - wrote a lot in check-in',
    'Previous Interest: Wanted to learn flute, piano - genuine interest in instruments',
    'Writing: Says she\'s a "really good writer" - asked to bring samples',
    'Social: Paired with Kira for peer teaching - good dynamic',
  ],
  patternsToWatch: [
    'Social Anxiety: Nervous in group setting, meeting new people',
    'Mistake Anxiety: Got uncomfortable when making errors',
    'Written vs. Verbal: More comfortable expressing through writing',
    'Quick Learner: Closed gap with other students rapidly',
  ],
  recommendations: [
    { priority: 'high', title: 'Send Mom Website Info', description: "Link to program website, guitar dashboard (noting it's in progress), Justin Guitar, pricing info." },
    { priority: 'high', title: 'Guitar Sourcing', description: 'Sofia needs a guitar. Offer to help source one.' },
    { priority: 'medium', title: 'Writing Samples', description: "Ask her to bring writing she's done. Could incorporate into sessions or just read/share." },
    { priority: 'low', title: 'Knuckle Strength', description: 'Both she and Kira have flat knuckles - need strengthening exercises.' },
  ],
  sessionEntries: [
    { date: 'Feb 7, 2026', rating: '-/10', notes: 'First session. Guitar basics: holding, finger picking (2 strings), tab reading. Wrote extensively in check-in. Paired with Kira for peer teaching.' },
  ],
  quotes: [
    { text: "She's very shy. She's socially anxious. And it was much more with the idea of telling me - never expressing herself through writing. So she didn't want... it's a be there. But not in an ink teenager way, just in, like, a scared and shy way.", attribution: '- Mr. Rivera, Feb 7 debrief' },
    { text: 'In her writing, she told me that she used to want to learn new instruments like the flute... and the piano. So maybe if I can get Luna to bring her keyboard. But I think what she was expressing is like, she does actually wanna learn an instrument.', attribution: '- Mr. Rivera, Feb 7 debrief' },
    { text: 'I rushed her through a bunch of stuff because I wanted her to feel like she could reach where the other kids are at. I wanted her to see the gap between her and the other kids as [small]. Because it is small, and she picked up quickly.', attribution: '- Mr. Rivera, Feb 7 debrief' },
  ],
  lastUpdated: 'February 9, 2026',
};

// ─────────────────────────────────────────────────
// CARMEN
// ─────────────────────────────────────────────────

const carmen = {
  id: 'carmen',
  name: 'Carmen',
  grade: 'New Student',
  status: 'new',
  programs: ['guitar'],
  engagement: { total: 0, recent: 0, last: '-' },
  progress: 'Expected at next session',
  progressNoData: true,
  dataMaturity: { profile: false, quantified: false },
  meta: {
    status: 'Expected Next Session',
    program: 'Guitar',
  },
  stats: [
    { icon: '📅', value: 0, label: 'Sessions' },
    { icon: '🎸', value: 'Guitar', label: 'Program' },
    { icon: '⏳', value: 'Pending', label: 'First Session' },
  ],
  tabs: [{ id: 'overview', label: 'Overview' }],
  knownInfo: [
    "Status: Was supposed to come Feb 7 but wasn't feeling well",
    "Confirmed: Dad said she'll be there next week",
    'Needs: May need help sourcing a guitar',
  ],
  recommendations: [
    { priority: 'high', title: 'Guitar Status', description: 'Confirm if Carmen has a guitar. If not, offer to help source one.' },
    { priority: 'medium', title: 'Welcome Integration', description: 'Similar approach to Sofia - pair with experienced student, quick basics overview.' },
    { priority: 'medium', title: 'Written Check-in', description: 'Use notebook check-in to learn about interests, comfort level, goals.' },
  ],
  lastUpdated: null,
};

// ─────────────────────────────────────────────────
// PRIYA
// ─────────────────────────────────────────────────

const priya = {
  id: 'priya',
  name: 'Priya',
  grade: 'TBD',
  status: 'inactive',
  programs: [],
  engagement: { total: 0, recent: 0, last: '-' },
  progress: 'No sessions yet',
  progressNoData: true,
  dataMaturity: { profile: false, quantified: false },
  meta: {
    status: 'Inactive',
    program: 'TBD',
  },
  stats: [
    { icon: '📅', value: '-', label: 'Sessions' },
    { icon: '📋', value: 'TBD', label: 'Program' },
    { icon: '📊', value: 'None', label: 'Data' },
  ],
  tabs: [{ id: 'overview', label: 'Overview' }],
  toCollect: [
    'Student grade level',
    'Program interest (Academic, Guitar, or both)',
    'Parent contact information',
    'Initial session observations',
    'Learning style indicators',
  ],
  lastUpdated: null,
};

// ─────────────────────────────────────────────────
// ADMIN DASHBOARD DATA
// ─────────────────────────────────────────────────

export const adminStats = [
  { icon: '👥', value: 6, label: 'Total Students' },
  { icon: '📚', value: 2, label: 'Academic' },
  { icon: '🎸', value: 4, label: 'Guitar' },
];

export const pipelineData = [
  { student: 'Maya', engagement: '✔', engColor: 'success', progress: '✔', progColor: 'success', profile: '✔', profColor: 'success', notes: '✔', notesColor: 'success', overall: 'Complete', overallType: 'success' },
  { student: 'Jordan', engagement: '✔', engColor: 'success', progress: '◔', progColor: 'warning', profile: '✔', profColor: 'success', notes: '✔', notesColor: 'success', overall: 'Strong', overallType: 'success' },
  { student: 'Sofia', engagement: '◔', engColor: 'warning', progress: '✘', progColor: 'danger', profile: '◔', profColor: 'warning', notes: '◔', notesColor: 'warning', overall: 'Developing', overallType: 'warning' },
  { student: 'Luna', engagement: '◔', engColor: 'warning', progress: '✘', progColor: 'danger', profile: '◔', profColor: 'warning', notes: '◔', notesColor: 'warning', overall: 'Developing', overallType: 'warning' },
  { student: 'Priya', engagement: '✘', engColor: 'danger', progress: '✘', progColor: 'danger', profile: '✘', profColor: 'danger', notes: '✘', notesColor: 'danger', overall: 'Empty', overallType: 'danger' },
  { student: 'Carmen', engagement: '✘', engColor: 'danger', progress: '✘', progColor: 'danger', profile: '✘', profColor: 'danger', notes: '✘', notesColor: 'danger', overall: 'Empty', overallType: 'danger' },
];

export const recentNotes = [
  { date: 'Feb 8, 2026 - Maya', title: 'Birthday!', content: 'Turned another year older. Got to choose rocks as birthday gift.' },
  { date: 'Feb 7, 2026 - Guitar Club', title: 'New Student: Sofia', content: 'Shy, socially anxious but engaged. Likes writing. Picked up finger picking, tab reading on day 1. Kira paired to teach her - good dynamic.' },
  { date: 'Feb 7, 2026 - Luna', title: 'Concern: Emotional Check-in', content: 'Check-in writing felt "coded" - overly positive, not matching observed energy. May need follow-up conversation next session.' },
  { date: 'Feb 4, 2026 - Jordan (S7)', title: 'Continuing Recovery', content: 'Trust recovering post-IEP crisis. Attention anchor rock working. Foundation work in progress.' },
];

export const actionItems = {
  immediate: [
    'Sofia: Send website link, guitar dashboard, pricing info to mom',
    'Carmen: Confirm attendance, help source guitar',
    'Luna: Private check-in about wellbeing next session',
    'Jordan: Deploy homework helper tools',
  ],
  dataNeeds: [
    'All Guitar Students: Set up session tracking with 1-10 ratings',
    'Sofia: Create student profile from enrollment info',
    'Luna: Document existing observations from 5th grade',
    'Maya: Continue assignment scoring',
  ],
  system: [
    'Create session-by-minute schedule for Guitar Club',
    'Build enrollment summary generator for new students',
    'Add manual 1-10 rating form to dashboards',
    'Parent dashboard access via Cloudflare Zero Trust',
  ],
};

// ─────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────

export const students = [maya, jordan, luna, sofia, carmen, priya];

export function getStudent(id) {
  return students.find((s) => s.id === id);
}

export function getAllStudents() {
  return students;
}
