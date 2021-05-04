import * as zzimAPI from '../lib/api/zzims';

const GET_ZZIMS = 'GET_ZZIM';
const GET_ZZIMS_SUCCESS = 'GET_ZZIMS_SUCCESS';
const GET_ZZIMS_ERROR = 'GET_ZZIMS_ERROR';

const CREATE_ZZIM = 'CREATE_ZZIM';
const CREATE_ZZIM_SUCCESS = 'CREATE_ZZIM_SUCCESS';
const CREATE_ZZIM_ERROR = 'CREATE_ZZIM_ERROR';

const DELETE_ZZIM = 'DELETE_ZZIM';
const DELETE_ZZIM_SUCCESS = 'DELETE_ZZIM_SUCCESS';
const DELETE_ZZIM_ERROR = 'DELETE_ZZIM_ERROR';

export const getZzims = () => async (dispatch) => {
  dispatch({ type: GET_ZZIMS });
  try {
    const zzims = await zzimAPI.getZzims();
    dispatch({
      type: GET_ZZIMS_SUCCESS,
      zzims,
    });
  } catch (error) {
    dispatch({
      type: GET_ZZIMS_ERROR,
      error,
    });
  }
};

export const deleteZzim = (zzim_id) => async (dispatch) => {
  dispatch({ type: DELETE_ZZIM });
  try {
    const zzimRes = await zzimAPI.deleteItem(zzim_id);
    dispatch({
      type: DELETE_ZZIM_SUCCESS,
      data: zzimRes,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ZZIM_ERROR,
      error,
    });
  }
};

export const createZzim = (book_id) => async (dispatch) => {
  dispatch({ type: CREATE_ZZIM });
  try {
    const zzim = await zzimAPI.createZzim(book_id);
    dispatch({
      type: CREATE_ZZIM_SUCCESS,
      data: zzim,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ZZIM_ERROR,
      error,
    });
  }
};
export const resetCreate = () => ({
  type: CREATE_ZZIM,
});

const initailState = {
  zzims: {
    loading: false,
    data: null,
    error: null,
  },
  delete: {
    delLoading: false,
    delData: null,
    delError: null,
  },
  create: {
    creLoading: false,
    creData: null,
    creError: null,
  },
};

export default function zzims(state = initailState, action) {
  switch (action.type) {
    case GET_ZZIMS:
      return {
        ...state,
        zzims: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_ZZIMS_SUCCESS:
      return {
        ...state,
        zzims: {
          loading: false,
          data: action.zzims,
          error: null,
        },
      };
    case GET_ZZIMS_ERROR:
      return {
        ...state,
        zzims: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case DELETE_ZZIM:
      return {
        ...state,
        delete: {
          delLoading: false,
          delData: null,
          delError: null,
        },
      };
    case DELETE_ZZIM_SUCCESS:
      return {
        ...state,
        delete: {
          delLoading: false,
          delData: action.data,
          delError: null,
        },
      };
    case DELETE_ZZIM_ERROR:
      return {
        ...state,
        delete: {
          delLoading: false,
          delData: null,
          delError: action.error,
        },
      };
    case CREATE_ZZIM:
      return {
        ...state,
        create: {
          creLoading: false,
          creData: null,
          creError: null,
        },
      };
    case CREATE_ZZIM_SUCCESS:
      return {
        ...state,
        create: {
          creLoading: false,
          creData: action.data,
          creError: null,
        },
      };
    case CREATE_ZZIM_ERROR:
      return {
        ...state,
        create: {
          creLoading: false,
          creData: null,
          creError: action.error,
        },
      };
    default:
      return state;
  }
}
