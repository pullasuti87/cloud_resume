import React from 'react';

interface Skill {
  title: string;
  skills: string[];
}

const Skill: React.FC<Skill> = ({ title, skills }) => (
  <div>
    <p>
      <span>{title}:</span> {skills.join(', ')}
    </p>
  </div>
);

const Skills = () => {
  const t = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Flask', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'Azure', 'Vite'],
    },
    {
      title: 'Operating Systems',
      skills: ['Linux', 'Windows'],
    },
  ];

  return (
    <div>
      <h2>Skills</h2>
      {t.map((s, index) => (
        <Skill key={index} title={s.title} skills={s.skills} />
      ))}
    </div>
  );
};

export default Skills;
