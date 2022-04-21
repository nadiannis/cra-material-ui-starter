import { Link } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        variant="button"
        color="#FFD700"
      >
        Learn React
      </Link>
    </footer>
  );
}
