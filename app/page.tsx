import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';

export default function Home() {
  return (
    <div>
      <main>
        <div className="mb-4">
          <MyDetails />
        </div>
        <div className="w-full border-b border-orange-500"></div>
        <div className="mt-4">
          <Main />
        </div>
      </main>
    </div>
  );
}

function MyDetails() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold">Juho-Pekka Mäkinen</h1>
        <h2 className="text-2xl font-semibold">
          Student at the University of Jyväskylä
        </h2>
        <p>
          page visits: <span></span>
        </p>
      </div>
      <Links />
    </div>
  );
}

function Links() {
  return (
    <div>
      <ul>
        <li>
          <a
            className="0 hover:text-orange-500 underline "
            href="mailto:juho-pekka.jp.makinen@student.jyu.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            makiju@student.jyu.fi
          </a>
        </li>
        <li>
          <a
            className="hover:text-orange-500 underline "
            href="https://github.com/pullasuti87"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            className="hover:text-orange-500 underline"
            href="testi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="resume.pdf"
          >
            download resume
          </a>
        </li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <div>
      <div className="mb-4">
        <Education />
      </div>
      <div className="w-[80%] mx-auto border-b border-gray-300"></div>
      <div className="mt-4 mb-4">
        <Experience />
      </div>
      <div className="w-[80%] mx-auto border-b border-gray-300"></div>
      <div className="mt-4 mb-4">
        <Projects />
      </div>
      <div className="w-[80%] mx-auto border-b border-gray-300"></div>
      <div className="mt-4 mb-4">
        <Skills />
      </div>
      <div className="w-[80%] mx-auto border-b border-gray-300"></div>
      <div className="mt-4">
        <Certifications />
      </div>
    </div>
  );
}
