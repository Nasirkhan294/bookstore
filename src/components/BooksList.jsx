import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            key={book.itemId}
            itemId={book.itemId}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default BooksList;
