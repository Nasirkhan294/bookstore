import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <header>
    <nav className={styles.navbar}>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/Category">Categories</Link>
        </li>
      </ul>
    </nav>
    <div className={styles.user}>
      <FaUser className={styles.icon} />
    </div>
  </header>
);

export default Navbar;
