const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (token) => ({
  type: LOGIN_USER,
  token,
});
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

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
