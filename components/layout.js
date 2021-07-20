
import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/components.module.css';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}