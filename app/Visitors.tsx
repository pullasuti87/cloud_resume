'use client';

const Visitors = () => {
  const get = async () => {
    const res = await fetch('/api/visitors');
    const data = await res.json();
    console.log(data);
  };

  const post = async () => {
    const res = await fetch('/api/visitors', { method: 'POST' });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xm px-1  rounded-full"
        onClick={get}
      >
        get
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xm px-1  rounded-full"
        onClick={post}
      >
       post 
      </button>
    </div>
  );
};

export default Visitors;
