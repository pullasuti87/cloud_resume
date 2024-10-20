import React from 'react';
// import styles from './Experience.module.css';

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
      <h2>{title}</h2>
      <p>{time}</p>
      <ul>
        {details.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </div>
  );

  if (hidden) {
    return (
      <article>
        <details>
          <summary>
            <h2>{title}</h2>
            <p>{time}</p>
          </summary>
          <ul>
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
        'Created and maintained reporting systems to support effective communication and transparency within the team.',
        'Collaborated with team members to address client needs and coordinate care, ensuring a cohesive and efficient approach',
      ],
    },
    {
      title: 'Permanent Employee in the Social and Healthcare sector',
      time: 'August 2011 - May 2020',
      details: [
        'Assisted in developing and managing processes to support client care and improve service delivery.',
        'Utilized organizational skills to manage and document client interactions, contributing to the overall effectiveness of the team.',
      ],
      hidden: true,
    },
  ];

  return (
    <section>
      <div>
        <h1>
          Work <br />
          Experience
        </h1>
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
