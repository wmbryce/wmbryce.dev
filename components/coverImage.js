import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/musings.module.css';

export default function CoverImage({title, src, slug, height, width}) {
  const image = <Image src={src} alt={`Cover Image for ${title}`} className={styles.image} layout="responsive" width={width} height={height} />;
  return (
    <div className={styles.imageContainer}>
      {slug ? (
        <Link as={`/musings/${slug}`} href="/musings/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        {image}
      )}
    </div>
  );
}
