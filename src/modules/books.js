import * as booksAPI from '../lib/api/books';

const GET_BOOKS = 'GET_BOOKS';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

const GET_BOOK = 'GET_BOOK';
const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
const GET_BOOK_ERROR = 'GET_BOOK_ERROR';

export const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  try {
    const books = await booksAPI.getBooks();
    dispatch({
      type: GET_BOOKS_SUCCESS,
      books,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKS_ERROR,
      error,
    });
  }
};

export const getBook = (id) => async (dispatch) => {
  dispatch({ type: GET_BOOK });
  try {
    const book = await booksAPI.getBook(id);
    dispatch({
      type: GET_BOOK_SUCCESS,
      book,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOK_ERROR,
      error,
    });
  }
};

const initailState = {
  books: {
    loading: false,
    data: null,
    error: null,
  },
  book: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function books(state = initailState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: {
          loading: false,
          data: action.books,
          error: null,
        },
      };
    case GET_BOOKS_ERROR:
      return {
        ...state,
        books: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case GET_BOOK:
      return {
        ...state,
        book: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        book: {
          loading: false,
          data: action.book,
          error: null,
        },
      };
    case GET_BOOK_ERROR:
      return {
        ...state,
        book: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
