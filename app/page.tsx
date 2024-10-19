import styles from './page.module.css';
import WorkExperience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div id="cv">
          <MainDetails />
          <MainArea />
        </div>
      </main>
    </div>
  );
}

function MainDetails() {
  return (
    <div className={styles.mainDetails}>
      <div id="name">
        <h1
          className={`${styles.quickFade} ${styles.two}`}
          style={{ marginBottom: '0.33em' }}
        >
          Juho-Pekka Mäkinen
        </h1>
        <h2
          className={`${styles.quickFade} ${styles.three}`}
          style={{ marginTop: '-0.33em', marginBottom: '0.33em' }}
        >
          Student at the University of Jyväskylä
        </h2>
        <h3
          className={`${styles.quickFade} ${styles.four}`}
          style={{ marginTop: '-0.33em', textIndent: '4px' }}
        >
          page visits: <span id="count"></span>
        </h3>
      </div>
      <ContactDetails />
    </div>
  );
}

function ContactDetails() {
  return (
    <div id="contact-details" className={`${styles.quickFade} ${styles.four}`}>
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

function MainArea() {
  return (
    <div id="main-area" className={`${styles.quickFade} ${styles.five}`}>
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
}
