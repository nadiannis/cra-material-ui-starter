import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/about" className={styles.navLink}>
        About
      </Link>
    </nav>
  );
}
