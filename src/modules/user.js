import * as authAPI from '../lib/api/auth';
import * as kakaoAPI from '../lib/api/kakaoLogin';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const CHECK = 'CHECK';
const CHECK_SUCCESS = 'CHECK_SUCCESS';
const CHECK_ERROR = 'CHECK_ERROR';
const WITHDRAW = 'WITHDRAW';

export const loginUser = ({ token, id, email, username }) => ({
  type: LOGIN_USER,
  token,
  id,
  email,
  username,
});

export const logoutUser = () => async (dispatch) => {
  try {
    const logoutRes = await authAPI.logout();
    dispatch({ type: LOGOUT_USER });
    removeSessionStorage();
  } catch (error) {
    console.log(error);
  }
};

function removeSessionStorage() {
  try {
    sessionStorage.removeItem('id');
  } catch (e) {
    console.log('sessionStorage is not working');
  }
}

export const checkUser = (ssID) => async (dispatch) => {
  dispatch({ type: CHECK });
  try {
    const res = await authAPI.check(ssID);
    const token = res.data.accessToken;
    const { id, email, username } = res.data.payload;
    dispatch({
      type: CHECK_SUCCESS,
      token,
      id,
      email,
      username,
    });
  } catch (e) {
    dispatch({ type: CHECK_ERROR });
    removeSessionStorage();
  }
};

export const withdrawal = (token) => async (dispatch) => {
  try {
    const withdraw = await authAPI.withdraw(token);
    dispatch({ type: WITHDRAW });
    removeSessionStorage();
  } catch (error) {
    console.log(error);
  }
};

export const kakaoLogin = (email, nickname) => async (dispatch) => {
  try {
    const payload = await kakaoAPI.kakaoLogin(email, nickname);
    console.log(payload);
    dispatch({
      type: LOGIN_USER,
      token: payload.accessToken,
      id: payload.payload.id,
      email,
      username: payload.payload.username,
    });
    try {
      sessionStorage.setItem('id', payload.payload.id);
    } catch (e) {
      console.log('sessionStorage is not working');
    }
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  isLogin: false,
  token: null,
  id: null,
  email: null,
  username: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
    case CHECK_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: action.token,
        id: action.id,
        email: action.email,
        username: action.username,
      };
    case LOGOUT_USER:
    case CHECK:
    case CHECK_ERROR:
      return {
        ...state,
        isLogin: false,
        token: null,
        id: null,
        email: null,
        username: null,
      };
    case WITHDRAW:
      return {
        ...state,
        isLogin: false,
        token: null,
        id: null,
        email: null,
        username: null,
      };
    default:
      return state;
  }
}
