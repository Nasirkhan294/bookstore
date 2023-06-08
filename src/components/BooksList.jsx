import Book from './Book';
import AddBook from './AddBook';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Nasir',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Nasir',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Nasir',
    },
  ];

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default BooksList;
