import { HIDE_MENU, SHOW_MENU } from "../constants/actions";

const initialState = { showMenu: true }

export const showMenu = (state = initialState, action) => {
   switch (action.type) {
      case SHOW_MENU: return { ...state, showMenu: true };
      case HIDE_MENU: return { ...state, showMenu: false }
      default:
         return state;
   }
}