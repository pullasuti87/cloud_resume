
interface Skill {
  title: string;
  skills: string[];
}

const Skill: React.FC<Skill> = ({ title, skills }) => (
  <div>
    <p>
      <span className=''>{title}:</span> <span className='text-sm italic'>{skills.join(', ')}</span>
    </p>
  </div>
);

const Skills = () => {
  const t = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL', 'HTML/CSS'],
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
      <h1 className="text-xl italic font-semibold">Skills</h1>
      {t.map((s, index) => (
        <Skill key={index} title={s.title} skills={s.skills} />
      ))}
    </div>
  );
};

export default Skills;
