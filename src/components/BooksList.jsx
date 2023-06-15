import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <li key={book.itemId}>
            <Book
              itemId={book.itemId}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          </li>
        ))}
      </ul>
      <div className="horizontal-divider" />
      <AddBook />
    </>
  );
};

export default BooksList;
