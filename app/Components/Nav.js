import Link from "next/link";
import styles from './Nav.module.css';

function Nav() {
  const id = 2;
  return (
    <div className={styles.navbar}>
      <div>
        Nav component
      </div>
      <ul>
        <Link className={styles.list} href="/">home</Link>
        <Link className={styles.list} href="/about">about</Link>
        <Link className={styles.list} href={`/about/${id}`}>
          details
        </Link>
        <Link className={styles.list} href="/contacts">contacts</Link>
      </ul>
    </div>
  );
}

export default Nav;