// import CoverImage from '../components/coverImage';
import styles from '../styles/musings.module.css';
import Link from 'next/link';

export default function MainPost({title, coverImage, date, excerpt, author, slug}) {
  return (
    <div>
      <div className={styles.imageContainer}>{/* <CoverImage title={title} src={coverImage} slug={slug} height={620} width={1240} /> */}</div>
      <div className={styles.titleContainer}>
        <div>
          <h3 className={styles.articleTitle}>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className={styles.subtitle}></div>
        </div>
        <div>
          <p className={styles.body}>{excerpt}</p>
        </div>
      </div>
    </div>
  );
}
