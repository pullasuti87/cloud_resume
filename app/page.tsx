import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Details />
          <div className="w-full border-b border-orange-500"></div>
          <Main />
        </div>
      </main>
    </div>
  );
}

function Details() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Juho-Pekka Mäkinen</h1>
        <h2 className="text-2xl font-semibold">
          Student at the University of Jyväskylä
        </h2>
        <p>
          page visits: <span></span>
        </p>
      </div>
      <Contact />
    </div>
  );
}

function Contact() {
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
            href="cv.pdf"
            target="_blank"
            download="vc.pdf"
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
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  );
}
