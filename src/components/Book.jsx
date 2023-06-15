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
      <div className={styles.bookContent}>
        <div className={styles.bookInfo}>
          <p className={styles.category}>{category}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>{author}</p>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.button}
            >
              Comment
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={handleRemoveBook}
            >
              Remove
            </button>
            <button
              type="button"
              className={styles.button}
            >
              Edit
            </button>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.circularProgressContainer}>
            <div className={styles.circularProgress} />
          </div>
          <div className={styles.progressStat}>
            <p className={styles.percentage}>64%</p>
            <p className={styles.completed}>Completed</p>
          </div>
          <div className={styles.divider} />
          <div className={styles.chappterContainer}>
            <div>
              <p className={styles.chapterLabel}>Current Chapter</p>
              <p className={styles.chapter}>Chapter 17</p>
            </div>
            <div>
              <button type="button" className={styles.btn}>Update Progress</button>
            </div>
          </div>
        </div>
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
