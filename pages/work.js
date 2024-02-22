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
              <span>TIFIN AMP</span> / Director of Frontend Engineering
            </h1>
            <em>Feb 2023-Present</em>
            <ul>
              <li>Designed, and implemented new product features, enhancing user experience and market competitiveness</li>
              <li>
                Orchestrated development cycles and project management for a team of six engineers, optimizing productivity and delivery timelines
              </li>
              <li>
                Developed new Salesforce managed package, greatly improving client interaction by delivering a tailored experience within their CRM
              </li>
            </ul>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>TIFIN</span> / Software Engineer
            </h1>
            <em>Jan 2022-Feb 2023</em>
            <ul>
              <li>Collaborated closely with design team to bring a powerful and elegant user experience to the TIFIN AMP product</li>
              <li>
                Engineered custom deployment pipelines, streamlining app deployment processes, and implemented end-to-end automated testing for
                production environment, bolstering operational efficiency
              </li>
              <li>Improved product quality and scalability by refactoring codebase to leverage Typescript and auto-generated types</li>
            </ul>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>PatchRx</span> / Director of Engineering
            </h1>
            <em>May 2021-Jan 2022</em>
            <ul>
              <li>Led migration of codebase from Javascript to Typescript</li>
              <li>Coordinated redesign of backend infrastructure to use PostgreSQL and GraphQL</li>
              <li>Managed development teams for both the Mobile and Web applications</li>
              <li> Interviewed and onboarded new engineers and interns</li>
            </ul>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>PatchRx</span> / Project Manager and Software Architect
            </h1>
            <em>June 2020-May 2021</em>
            <ul>
              <li>Built MVP of PatchRx Web application using React and Next.js</li>
              <li>Managed team of up to six developers</li>
            </ul>
          </div>
          <div className={styles.sectionBody}>
            <h1>
              <span>PatchRx</span> / Full Stack Engineer
            </h1>
            <em>May 2019-June 2020</em>
            <ul>
              <li>Built MVP of the PatchRx mobile app using React Native</li>
              <li>Designed and implemented backend RESTAPIs using DynamoDB, API Gateway, and AWS Lambda</li>
            </ul>
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
            <a href={'mailto:michael@wmbryce.dev'}> michael@wmbryce.dev </a>
            <a href={'https://www.linkedin.com/in/wmbryce/'}> linkedin.com/in/wmbryce </a>
            <a href={'https://github.com/wmbryce'}> github.com/wmbryce </a>
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
