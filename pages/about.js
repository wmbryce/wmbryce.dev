import {useEffect} from 'react';
import styles from '../styles/about.module.css';
import PageLayout from '../components/pageLayout';
import markdownToHtml from '../lib/markdownToHtml';
import fs from 'fs';
import matter from 'gray-matter';

export default function About(props) {
  useEffect(() => {
    console.log('Hello');
  }, []);

  console.log('result from bookshelf:', props.booklist);

  return (
    <PageLayout>
      <h1 className={styles.title}>about</h1>
      <div className={styles.body} dangerouslySetInnerHTML={{__html: props.about}} />
    </PageLayout>
  );
}

export async function getStaticProps({params}) {
  const fileContents = fs.readFileSync('./content/about.md');
  const {data, content} = matter(fileContents);
  const about = await markdownToHtml(content);

  return {
    props: {
      about,
    },
  };
}
