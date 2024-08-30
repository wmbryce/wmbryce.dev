import {useEffect} from 'react';
import styles from '../styles/bookshelf.module.css';
import markdownToHtml from '../lib/markdownToHtml';
import fs from 'fs';
import matter from 'gray-matter';
import PageLayout from '../components/pageLayout';

export default function Bookshelf(props) {
  useEffect(() => {
    console.log('Hello');
  }, []);

  // console.log('result from bookshelf:', props.booklist);

  return (
    <PageLayout>
      <h1 className={styles.title}>bookshelf</h1>
      <div className={styles.body} dangerouslySetInnerHTML={{__html: props.booklist}} />
    </PageLayout>
  );
}

export async function getStaticProps({params}) {
  const fileContents = fs.readFileSync('./content/booklist.md');
  const {data, content} = matter(fileContents);
  const booklist = await markdownToHtml(content);

  return {
    props: {
      booklist,
    },
  };
}
