import React from 'react';
// import styles from './Experience.module.css';

interface Info {
  title: string;
  time: string;
  details: string[];
  collapsible?: boolean;
}

const Job: React.FC<Info> = ({
  title,
  time,
  details,
  collapsible = false,
}) => {
  const content = (
    <div>
      <h2>{title}</h2>
      <p>{time}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );

  if (collapsible) {
    return (
      <article>
        <details>
          <summary>
            <h2>{title}</h2>
            <p>{time}</p>
          </summary>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
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
      title: 'a',
      time: 'September 2023 - Present',
      details: ['something... something...'],
    },
    {
      title: 'b',
      time: 'June 2023 - September 2023',
      details: ['say something!'],
      collapsible: true,
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
        {jobs.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
