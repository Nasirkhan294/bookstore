import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const res = await axios.get(`${BaseUrl}/OaRL2oDeaQ8TtcqWHd4v/books`);
    return res.data;
  } catch (error) {
    throw Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const res = await axios.post(`${BaseUrl}/OaRL2oDeaQ8TtcqWHd4v/books`, book);
    return res.data;
  } catch (error) {
    throw Error(`Failed to add book: ${error.message}`);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${BaseUrl}/OaRL2oDeaQ8TtcqWHd4v/books/${id}`);
    return id; // Return the bookId as the fulfilled action payload
  } catch (error) {
    throw Error(`Failed to remove book: ${error.message}`);
  }
});

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Add the addNewBook reducer
    addNewBook: (state, action) => {
      const newBook = action.payload;
      const book = {
        itemId: newBook.itemId,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      };
      state.books.push(book);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        // Get the books data from the action payload
        const books = action.payload;

        // Create an empty array to store the new books data
        const newBooks = [];

        // Iterate over each book in the books data
        Object.keys(books).forEach((book) => {
          // Create a new book object with selected properties
          const newBook = {
            itemId: book,
            title: books[book][0].title,
            author: books[book][0].author,
            category: books[book][0].category,
          };

          // Add the new book object to the newBooks array
          newBooks.push(newBook);
        });

        // Return the updated state with the new books data and isLoading set to false
        return ({
          ...state,
          books: newBooks,
          isLoading: false,
        });
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
        state.books = [...state.books];
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.itemId !== bookId);
        state.isLoading = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addNewBook } = booksSlice.actions;
export default booksSlice.reducer;
