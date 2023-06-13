import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './styles/AddBook.module.css';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      itemId: Date.now(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <>
      <h2>Add new book</h2>
      <form className={styles.newBook}>
        <input
          type="text"
          placeholder="title"
          className={styles.title}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="author"
          className={styles.author}
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <input
          type="text"
          placeholder="category"
          className={styles.category}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <button
          type="button"
          className={styles.btn}
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBook;
