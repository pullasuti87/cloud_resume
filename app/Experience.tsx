interface Info {
  title: string;
  time: string;
  details: string[];
  // ? makes optional
  hidden?: boolean;
}

const Job: React.FC<Info> = ({ title, time, details, hidden = false }) => {
  const content = (
    <div>
      <h2 className="font-semibold text-base">{title}</h2>
      <p className="text-sm italic">{time}</p>
      <ul className="list-disc pl-5">
        {details.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </div>
  );

  if (hidden) {
    return (
      <article className="mt-2">
        <details>
          <summary>
            <span className="font-semibold text-base">{title}</span>
            <span className="block text-sm italic">{time}</span>
          </summary>
          <ul className="list-disc pl-5">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </details>
      </article>
    );
  }

  return <article>{content}</article>;
};

const Experience: React.FC = () => {
  const jobs: Info[] = [
    {
      title: 'Temporary Employee in the Social and Healthcare sector',
      time: 'August 2020 - Present',
      details: [
        'Worked as a healthcare professional in various nursing roles across different locations.',
      ],
    },
    {
      title: 'Permanent Employee in the Social and Healthcare sector',
      time: 'August 2011 - May 2020',
      details: [
        'Worked as a Registered Nurse providing patient care while serving as the unit"s IT support person for staff members.',
        'Managed clinical system access and provided basic operating system support for colleagues, including unlocking accounts and creating temporary login credentials.',
      ],
      hidden: true,
    },
  ];

  return (
    <section>
      <div>
        <h1 className="text-xl font-semibold italic">Work Experience</h1>
      </div>
      <div>
        {jobs.map((j, i) => (
          <Job key={i} {...j} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
