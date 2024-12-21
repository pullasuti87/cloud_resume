interface Info {
  title: string;
  details: string;
  link?: string;
}

const Project: React.FC<Info> = ({ title, details, link }) => {
  const content = (
    <div>
      <h2 className="text-base font-semibold">{title}</h2>
      <p>{details}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          View Repository
        </a>
      )}
    </div>
  );

  return <article>{content}</article>;
};

const Projects: React.FC = () => {
  const projects: Info[] = [
    {
      title: 'Interpreter in Python',
      details: 'test',
      link: 'https://github.com/pullasuti87/interpreter',
    },
    {
      title: 'Cloud Resume',
      details: 'test',
      link: 'https://github.com/pullasuti87/cloud_resume',
    },
    {
      title: 'Custom ChatGPT',
      details: 'test',
      link: 'https://github.com/pullasuti87/my_chatgpt',
    },
  ];

  return (
    <section>
      <div>
        <h1 className="text-xl font-semibold italic">Projects</h1>
      </div>
      <div>
        {projects.map((j, i) => (
          <Project key={i} {...j} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
