import styles from '../styles/work.module.css';
import CirclesAndSquares from '../components/circlesAndSquares';
import Menu from '../components/menu';
import markdownToHtml from '../lib/markdownToHtml';
import fs from 'fs';
import matter from 'gray-matter';
import PageLayout from '../components/pageLayout';

export default function Work(props) {
  return (
    <PageLayout>
      <h1 className={styles.title}>work</h1>
      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <div />
          <h1>Experience</h1>
        </div>
        <div className={styles.sectionList}>
          <div className={styles.sectionBody}>
            <h1>
              <span>PatchRx</span> / Director of Engineering
            </h1>
            <em>May 2021-Present</em>
            <p>Recruited new engineering talent, managed developer teams, </p>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>PatchRx</span> / Project Manager and Software Architect
            </h1>
            <em>June 2020-May 2021</em>
            <p>Designed and implemented cloud infrastructure for web and mobile applications, and managed team of five developers.</p>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>PatchRx</span> / Full Stack Engineer
            </h1>
            <em>May 2019-June 2020</em>
            <p>Developed MVP of mobile app using React Native, AWS Amplify, Serverless, and DynamoDB</p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <div />
          <h1>Projects</h1>
        </div>
        <div className={styles.sectionList}>
          <div className={styles.sectionBody}>
            <h1>
              <span>WMBryce.dev</span> / Personal website
            </h1>
            <p>Designed and built site from scratch using React, Next.js, Cloudflare & Fleek</p>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>Gratitude Journal</span> / Emacs extension
            </h1>
            <p>A simple extension to promote gratitue in emacs org mode</p>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>Ethereum Validator</span> / Blockchain Validating Server
            </h1>
            <p>Setup an Ubuntu server to validate the ethereum 2.0 blockchain</p>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>Mysterium Node</span> / VPN Node
            </h1>
            <p>Setup VPN node on the mysterium network using a rasberry pi.</p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <div />
          <h1>Education</h1>
        </div>
        <div className={styles.sectionList}>
          <div className={styles.sectionBody}>
            <h1>
              <span>Trinity University</span> / B.S. Engineering Science
            </h1>
            <em>Aug. 2014-May 2019, San Antonio, TX</em>
            <p>Earned a Bachelor of Science in Engineering with a minor in Mathematics</p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <div />
          <h1>Skills</h1>
        </div>
        <div className={styles.sectionList}>
          <div className={styles.sectionBody}>
            <p>
              Languages: <span>Javascript, Python, Scala, Swift, C</span>
            </p>
            <p>
              Tools/Frameworks: <span>AWS, DynamoDB, SQL, React, React Native, Next.js, Serverless</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <div />
          <h1>Contact</h1>
        </div>
        <div className={styles.sectionList}>
          <div className={styles.sectionBodyContact}>
            <p> 512.971.4212 </p>
            <p> michael@wmbryce.dev </p>
            <p> linkedin.com/in/michaelbryce </p>
            <p> github.com/wmbryce </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps({params}) {
  const fileContents = fs.readFileSync('./content/work.md');
  const {data, content} = matter(fileContents);
  const work = await markdownToHtml(content);

  return {
    props: {
      work,
    },
  };
}
