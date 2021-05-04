import * as commentsAPI from '../lib/api/comments';

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_SUCCESS';

const CREATE_COMMENT = 'CREATE_COMMENT';
const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
const UPDATE_COMMENT_ERROR = 'UPDATE_COMMENT_ERROR';

const DELETE_COMMENT = 'DELETE_COMMENT';
const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';

export const getComments = (bookId) => async (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  try {
    const comments = await commentsAPI.getComments(bookId);
    dispatch({
      type: GET_COMMENTS_SUCCESS,
      comments,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_ERROR,
      error,
    });
  }
};

export const createComment = (bookId, comment) => async (
  dispatch,
  getState,
) => {
  const comments = getState().comments;
  const token = getState().user.token;
  dispatch({ type: CREATE_COMMENT });
  try {
    const serverComment = await commentsAPI.createComment(
      bookId,
      token,
      comment,
    );
    const commentList = comments.comments.data;
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
      comments: commentList.concat(serverComment.data),
    });
  } catch (error) {
    dispatch({
      type: CREATE_COMMENT_ERROR,
      error,
    });
  }
};

export const updateComment = (bookId, comment) => async (
  dispatch,
  getState,
) => {
  const comments = getState().comments.comments.data;
  const token = getState().user.token;
};

export const deleteComment = (commentId, bookId) => async (
  dispatch,
  getState,
) => {
  const token = getState().user.token;
  const comments = getState().comments.comments.data;
  const newComment = comments.filter((comment) => comment.id !== commentId);
  dispatch({ type: DELETE_COMMENT });
  try {
    await commentsAPI.deleteComment(commentId, token);
    dispatch({ type: DELETE_COMMENT_SUCCESS, comments: newComment });
  } catch (error) {
    dispatch({ type: DELETE_COMMENT_ERROR, error });
  }
};

const initailState = {
  comments: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function comments(state = initailState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          data: action.comments,
          error: null,
        },
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case CREATE_COMMENT:
      return {
        ...state,
        comments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          data: action.comments,
          error: null,
        },
      };
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: {
          loading: true,
          ...state.comments,
        },
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          data: action.comments,
        },
      };
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
