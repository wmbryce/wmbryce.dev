import styles from '../styles/musings.module.css';
import CirclesAndSquares from '../components/circlesAndSquares';
import Menu from '../components/menu';
import MainPost from '../components/mainPost';
//import fs from 'fs';
import {getAllPosts} from '../lib/api';

export default function Musings({allPosts}) {
  const mainPost = allPosts[0];
  const restOfPosts = allPosts.slice(1);

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.mainContainer}>
        <div className={styles.illustration}>
          <CirclesAndSquares column={true} />
        </div>
        <div className={styles.main}>
          <h1 className={styles.title}>musing</h1>
          {mainPost && (
            <MainPost
              title={mainPost.title}
              coverImage={mainPost.coverImage}
              date={mainPost.date}
              author={mainPost.author}
              slug={mainPost.slug}
              excerpt={mainPost.excerpt}
            />
          )}
          {/*restOfPosts.length > 0 && <MoreStories posts={restOfPosts} />*/}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({params}) {
  //const fileContents = fs.readFileSync('./pages/_musings');
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);
  //const fileContents = {};
  //const {data,content} = matter(fileContents);
  //const booklist = await markdownToHtml(content);
  const post = {};

  return {
    props: {
      allPosts,
    },
  };
}
