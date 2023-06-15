import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import styles from './styles/AddBook.module.css';
import { addBook, addNewBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.books);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: nanoid(),
      title,
      author,
      category,
    })).then(() => dispatch(addNewBook({
      item_id: nanoid(),
      title,
      author,
      category,
    })));

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <>
      <h2>Add new book</h2>
      {isLoading && <p>Loading...</p>}
      {error && (
        <p>
          Error:
          {error}
        </p>
      )}
      <form className={styles.newBook} onSubmit={handleSubmit}>
        <div className={styles.left}>
          <input
            type="text"
            placeholder="title"
            className={styles.title}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <input
            type="text"
            placeholder="author"
            className={styles.author}
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </div>
        <div className={styles.right}>
          <select
            className={styles.category}
            name="category"
            value={category}
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Fiction">Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science-Fiction">Science</option>
          </select>
          <button
            type="submit"
            className={styles.btn}
          >
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
