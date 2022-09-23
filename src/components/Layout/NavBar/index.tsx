import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './navBar.module.scss';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.tabList}>
        <li className={styles.tab}>
          <Link href='/' passHref>
            <a
              className={cx({
                [styles.active]: router.pathname === '/',
              })}
            >
              Home
            </a>
          </Link>
        </li>
        <li className={styles.tab}>
          <Link href='/about' passHref>
            <a
              className={cx({
                [styles.active]: router.pathname === '/about',
              })}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
