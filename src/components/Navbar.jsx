import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={styles.navbar}>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
