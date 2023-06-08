import styles from './styles/AddBook.module.css';

const AddBook = () => (
  <>
    <h2>Add new book</h2>
    <form className={styles.newBook}>
      <input type="text" placeholder="title" className={styles.title} />
      <input type="text" placeholder="author" className={styles.author} />
      <button type="submit" className={styles.btn}>Add Book</button>
    </form>
  </>
);

export default AddBook;
