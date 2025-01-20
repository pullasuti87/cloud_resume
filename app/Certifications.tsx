interface Cert {
  title: string;
  date: string;
}

const Item: React.FC<Cert> = ({ title, date }) => (
  <div className="flex justify-between">
    <p>{title}</p>
    <p>{date}</p>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Cybersecurity Professional Certificate',
      date: 'October 2024',
    },
    {
      title: 'Microsoft IT Support Specialist Certificate',
      date: 'September 2024',
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold italic">Certifications</h1>
      {certifications.map((c, i) => (
        <Item key={i} title={c.title} date={c.date} />
      ))}
    </div>
  );
};

export default Certifications;
