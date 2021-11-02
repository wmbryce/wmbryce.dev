import {useEffect} from 'react';
import styles from '../styles/pageLayout.module.css';
import CirclesAndSquares from '../components/circlesAndSquares';
import Menu from '../components/menu';

export default function PageLayout(props) {
  useEffect(() => {
    console.log('Hello');
  }, []);

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.mainContainer}>
        <div className={styles.illustration}>
          <CirclesAndSquares column={true} />
        </div>
        <div className={styles.main}>{props.children}</div>
      </div>
    </div>
  );
}
