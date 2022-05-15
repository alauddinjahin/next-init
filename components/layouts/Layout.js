import styles from "./Layout.module.css";
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div>
        <main className={styles.container}>
            <Nav/>
            {children}
        </main>
    </div>
  )
}

export default Layout