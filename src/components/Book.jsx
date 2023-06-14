import PropTypes from 'prop-types';
import styles from './styles/Book.module.css';

const Book = ({
  title,
  author,
  category,
}) => {
  const handleRemoveBook = () => {};

  return (
    <div className={styles.book}>
      <div className={styles.content}>
        <p>{title}</p>
        <p>{author}</p>
        <p>{category}</p>
        <button
          type="button"
          className={styles.btn}
          onClick={handleRemoveBook}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
