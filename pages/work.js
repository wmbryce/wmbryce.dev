import styles from '../styles/work.module.css';
import markdownToHtml from '../lib/markdownToHtml';
import fs from 'fs';
import matter from 'gray-matter';
import PageLayout from '../components/pageLayout';
import {jsx} from '@emotion/react';

export default function Work(props) {
  return (
    <PageLayout>
      <div className={styles.scrollContainer}>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <div></div>
            <h1 className={styles.title}>Michael Bryce</h1>
            <a href="mailto:michael@wmbryce.dev">michael@wmbryce.dev</a>
            <a href="https://www.linkedin.com/in/wmbryce/">linkedin.com/in/wmbryce</a>
            <a href="https://github.com/wmbryce">github.com/wmbryce</a>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <div></div>
            <h2>Experience</h2>
          </div>
          <div className={styles.sectionList}>
            <article className={styles.sectionBody}>
              <div>
                <h3>
                  <span>TIFIN AMP</span> / Lead Frontend Engineer
                </h3>
                <em>Feb 2023-Present</em>
              </div>
              <ul>
                <li>
                  Designed and implemented a new component library using Storybook and Figma, standardizing product UI and improving code reuse across
                  the AMP ecosystem
                </li>
                <li>
                  Orchestrated development cycles for a team of eight engineers, optimizing productivity and consistently meeting project deadlines,
                  resulting in 23% faster time-to-market
                </li>
                <li>
                  Deployed a new managed package in Salesforce using APEX and React to deliver a custom AMP experience within client CRMs, increasing
                  user engagement by over 400%
                </li>
              </ul>
            </article>
            <article className={styles.sectionBody}>
              <div>
                <h3>
                  <span>TIFIN</span> / Senior Frontend Engineer
                </h3>
                <em>Jan 2022-Feb 2023</em>
              </div>
              <ul>
                <li>
                  Led frontend development of a new web application which empowered clients to orchestrate custom marketing campaigns and optimize
                  their sales pipelines using AI, culminating in product launch to over ten clients
                </li>
                <li>
                  Integrated automated end-to-end Cypress tests into application deployment pipeline, achieved over 80% test coverage and reduce
                  critical production bugs by 68%
                </li>
                <li>
                  Improved developer tooling by migrating codebase to Typescript, autogenerating GraphQL types, and utilizing Tailwind CSS to speed up
                  development time by 30% while improving code quality and reducing type-related bugs
                </li>
              </ul>
            </article>
            <article className={styles.sectionBody}>
              <div>
                <h3>
                  <span>PatchRx</span> / Senior Full Stack Engineer & Product Manager
                </h3>
                <em>June 2020-Jan 2022</em>
              </div>
              <ul>
                <li>
                  Spearheaded the development of PatchRx Web application MVP using React and Next.js, resulting in a successful pilot launch to three
                  pharmacies
                </li>
                <li>
                  Scaled development team capacity by 100% through strategic hiring and onboarding of 4 new engineers and interns, conducting over 16
                  technical interviews
                </li>
                <li>
                  Architected and implemented backend infrastructure redesign, integrating PostgreSQL and GraphQL, which reduced query response time
                  by 30% and decreased cloud administration costs by 20%
                </li>
              </ul>
            </article>
            <article className={styles.sectionBody}>
              <div>
                <h3>
                  <span>PatchRx</span> / Full Stack Engineer
                </h3>
                <em>May 2019-June 2020</em>
              </div>
              <ul>
                <li>
                  Engineered consumer-facing mobile app with features such as BLE communication and custom push notifications using React Native and
                  deployed MVP to both Android and iOS app stores for pilot launch of the app to over 100 users
                </li>
                <li>Designed and deployed high-performance RESTful API Backend using AWS serverless technologies (Lambda, API Gateway, DynamoDB)</li>
              </ul>
            </article>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <div></div>
            <h2>Projects</h2>
          </div>
          <div className={styles.sectionList}>
            <article className={styles.sectionBody}>
              <h3>
                <span>
                  <a href="https://pixelfortune.dev">Pixel Fortune</a>
                </span>{' '}
                / Personal website
              </h3>
              <p>Designed and created text based fortune telling web app from scratch using React, Next.js, Cloudflare & Fleek</p>
            </article>
            <article className={styles.sectionBody}>
              <h3>
                <span>
                  <a href="https://wmbryce.dev">WMBryce.dev</a>
                </span>{' '}
                / Personal website
              </h3>
              <p>Designed and built site from scratch using React, Next.js, Cloudflare & Fleek</p>
            </article>
            <article className={styles.sectionBody}>
              <h3>
                <span>Ethereum Node</span> / Blockchain Validating Server
              </h3>
              <p>Setup an Ubuntu server running Geth and Lighthouse to validate the Ethereum blockchain</p>
            </article>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <div></div>
            <h2>Education</h2>
          </div>
          <div className={styles.sectionList}>
            <article className={styles.sectionBody}>
              <h3>
                <span>Trinity University</span> / B.S. Engineering Science
              </h3>
              <em>Aug. 2014-May 2019, San Antonio, TX</em>
              <p>Earned a Bachelor of Science in Engineering with a minor in Mathematics</p>
            </article>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <div></div>
            <h2>Skills</h2>
          </div>
          <div className={styles.sectionList}>
            <div className={styles.sectionBody}>
              <p>
                Languages: <span>Javascript, Python, Swift, Scala</span>
              </p>
              <p>
                Tools/Frameworks: <span>React, React Native, Next.js, Serverless, Cypress, Figma, Storybook, AWS</span>
              </p>
            </div>
          </div>
        </section>
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
