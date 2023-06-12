import PropTypes from 'prop-types';
import styles from './styles/Book.module.css';

const Book = ({ title, author }) => (
  <div className={styles.book}>
    <div className={styles.content}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" className={styles.btn}>Remove</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
