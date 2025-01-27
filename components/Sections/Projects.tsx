interface Info {
  title: string;
  tech: string;
  details: string[];
  link?: string;
}

const Project: React.FC<Info> = ({ title, tech, details, link }) => {
  const content = (
    <div>
      <div className="flex items-center">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-orange-500 hover:underline"
          >
            {title}
          </a>
        )}
        <p className="ml-1 mr-1">|</p>
        <p className="text-sm italic">{tech}</p>
      </div>
      <ul className="list-disc pl-5">
        {details.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </div>
  );

  return <article>{content}</article>;
};

const Projects: React.FC = () => {
  const projects: Info[] = [
    {
      title: 'Cloud Resume',
      tech: 'Next.js, Azure, Terraform, GitHub Actions',
      details: [
        'Developed a resume using a serverless architecture',
        'Implemented infrastructure as code (IaC) and a CI/CD pipeline',
      ],

      link: 'https://github.com/pullasuti87/cloud_resume',
    },
    {
      title: 'Custom ChatGPT',
      tech: 'Python, PyTorch',
      details: [
        'Developed a transformer-based language model, including an attention mechanism and positional encoding',
        'Integrated OpenAI’s TikToken tokenization (cl100k base)',
      ],
      link: 'https://github.com/pullasuti87/my_chatgpt',
    },
    {
      title: 'Interpreter in Python',
      tech: 'Python',
      details: [
        'Developed a programming language interpreter, including a lexer, parser, and evaluator',
        'Added support for variables, functions, data structures, and higher-level function features',
      ],
      link: 'https://github.com/pullasuti87/interpreter',
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
