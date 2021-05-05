import * as authAPI from '../lib/api/auth';
import * as kakaoAPI from '../lib/api/kakaoLogin';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
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
  } catch (error) {
    console.log(error);
  }
};

export const withdrawal = (token) => async (dispatch) => {
  try {
    const withdraw = await authAPI.withdraw(token);
    dispatch({ type: WITHDRAW });
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
      username: nickname,
    });
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
      return {
        ...state,
        isLogin: true,
        token: action.token,
        id: action.id,
        email: action.email,
        username: action.username,
      };
    case LOGOUT_USER:
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
