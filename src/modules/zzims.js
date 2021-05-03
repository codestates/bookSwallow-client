import * as zzimAPI from '../lib/api/zzims';

const GET_ZZIMS = 'GET_ZZIM';
const GET_ZZIMS_SUCCESS = 'GET_ZZIMS_SUCCESS';
const GET_ZZIMS_ERROR = 'GET_ZZIMS_ERROR';

const CREATE_ZZIM = 'CREATE_ZZIM';
const CREATE_ZZIM_SUCCESS = 'CREATE_ZZIM_SUCCESS';
const CREATE_ZZIM_ERROR = 'CREATE_ZZIM_ERROR';

const DELTE_ZZIM = 'DELETE_ZZIM';
const DELTE_ZZIM_SUCCESS = 'DELETE_ZZIM_SUCCESS';
const DELTE_ZZIM_ERROR = 'DELETE_ZZIM_ERROR';

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

const initailState = {
  zzims: {
    loading: false,
    data: null,
    error: null,
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
    default:
      return state;
  }
}
