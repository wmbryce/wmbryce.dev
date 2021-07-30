import {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css';
import CirclesAndSquares from '../components/circlesAndSquares';
import Menu from '../components/menu';

export default function Home() {
  useEffect(() => {
    console.log('Hello');
  }, []);

  const [didScroll, setDidScroll] = useState(false);

  const scrollInProgress = () => {
    setDidScroll(true);
  };
  //console.log(window.scrollY);

  //window.addEventListener('scroll', scrollInProgress)

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.main}>
        <CirclesAndSquares hideBlackCircle={true} />
        <CirclesAndSquares />
        <CirclesAndSquares />
        <CirclesAndSquares />
      </div>
    </div>
  );
}
