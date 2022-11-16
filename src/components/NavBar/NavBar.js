import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navbar}>
          <a className={styles.toggler_icon} href='/'>
            <i className='fa fa-tasks'></i>
          </a>
          <ul className={styles.navbar_links}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/favorite'>Favorite</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
export default NavBar;
