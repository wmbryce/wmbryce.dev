import {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/about.module.css';
import CirclesAndSquares from '../components/circlesAndSquares';
import Menu from '../components/menu';
import markdownToHtml from '../lib/markdownToHtml';
import fs from 'fs';
import matter from 'gray-matter';

export default function Work(props) {

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.mainContainer}>
        <div className={styles.illustration}>
          <CirclesAndSquares column={true} />
        </div>
        <div className={styles.main}>
          <h1 className={styles.title}>work</h1>
          <div className={styles.body} dangerouslySetInnerHTML={{__html: props.work}} />
        </div>
      </div>
    </div>
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