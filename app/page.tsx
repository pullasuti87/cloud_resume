import styles from './page.module.css';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div id="cv">
          <Details />
          <Main />
        </div>
      </main>
    </div>
  );
}

function Details() {
  return (
    <div>
      <div id="name">
        <h1>Juho-Pekka Mäkinen</h1>
        <h2>Student at the University of Jyväskylä</h2>
        <h3>
          page visits: <span id="count"></span>
        </h3>
      </div>
      <Contact />
    </div>
  );
}

function Contact() {
  return (
    <div id="contact-details">
      <ul>
        <li>
          <a
            href="mailto:juho-pekka.jp.makinen@student.jyu.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            makiju@student.jyu.fi
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pullasuti87"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a href="cv.pdf" target="_blank" download="vc.pdf">
            download resume
          </a>
        </li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <div id="main-area">
      <Education />
      <Experience />
      <Projects />
      <Skills/>
      <Certifications/>
    </div>
  );
}
