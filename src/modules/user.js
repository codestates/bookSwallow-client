import * as authAPI from '../lib/api/auth';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (token) => ({
  type: LOGIN_USER,
  token,
});
export const logoutUser = (token) => async (dispatch) => {
  try {
    const logoutRes = await authAPI.logout(token);
    dispatch({ type: LOGOUT_USER });
    console.log('logoutRes?', logoutRes);
    console.log('로그아웃 되었습니다.');
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  isLogin: false,
  token: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: true,
        token: action.token,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLogin: false,
        token: null,
      };
    default:
      return state;
  }
}
