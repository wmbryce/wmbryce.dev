import styles from '../styles/musings.module.css';
import MainPost from '../components/mainPost';
//import fs from 'fs';
import {getAllPosts} from '../lib/api';
import PageLayout from '../components/pageLayout';

export default function Musings({allPosts}) {
  const mainPost = allPosts[0];
  const restOfPosts = allPosts.slice(1);

  return (
    <PageLayout>
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
    </PageLayout>
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
