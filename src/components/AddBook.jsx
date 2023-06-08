import styles from './styles/AddBook.module.css';

const AddBook = () => (
  <div className={styles.newBook}>
    <input type="text" placeholder="title" className={styles.title} />
    <input type="text" placeholder="author" className={styles.author} />
    <button type="submit" className={styles.btn}>Add Book</button>
  </div>
);

export default AddBook;
