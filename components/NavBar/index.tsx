import Link from 'next/link'

import { useRouter } from 'next/router'
import cx from 'classnames'

import styles from './navBar.module.css'

const NavBar = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <ul className={styles.tabList}>
        <li className={styles.tab}>
          <Link href='/'>
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
          <Link href='/about'>
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
  )
}

export default NavBar
