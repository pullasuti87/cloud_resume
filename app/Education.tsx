
interface Info {
  title: string;
  time: string;
  details: string;
}

const Education: React.FC = () => {
  const Items: Info[] = [
    {
      title: "Master's Program in Mathematical Information Technology",
      details: 'University of Jyväskylä, Jyväskylä',
      time: 'August 2021 - Ongoing',
    },
    {
      title: 'Web Developer, 30 ECTS',
      details: 'Jyväskylä University of Applied Sciences',
      time: 'August 2020 - May 2021',
    },
    {
      title: 'Registered Nurse (Bachelor of Health Care)',
      details: 'Laurea University of Applied Sciences, Tikkurila',
      time: 'September 2007 - November 2011',
    },
  ];

  return (
    <section>
      <h1 className="text-xl font-semibold italic">Education</h1>
      {Items.map((i, j) => (
        <article key={j}>
          <div className="">
            <h2 className="font-semibold">{i.title}</h2>
            <p>{i.details}</p>
            <p className="text-sm italic">{i.time}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Education;
