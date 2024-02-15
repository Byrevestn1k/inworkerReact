import {
  USER_START,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_END,
} from "../constant/auth.constant";

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  level: ""
};

export const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case USER_START:
      return {
        ...state,
        loading: true,
      };
    case USER_END:
      return {
        ...state,
        loading: false,
      };
    case USER_SIGNIN:
      return {
        ...state,
        user: action.payload?.user,
        level: action.payload?.level,
        isLoggedIn: true,
      };
    case USER_SIGNOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

