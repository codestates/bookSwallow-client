import * as authAPI from '../lib/api/auth';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

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
    default:
      return state;
  }
}
