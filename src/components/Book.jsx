import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles/Book.module.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  itemId,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(itemId));
  };

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
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
