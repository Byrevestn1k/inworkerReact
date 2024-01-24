import { UPLOAD_NAVIGATION } from "../constants/actions";

const initialState = { navigation: null }

export const uploadNavigation = (state = initialState, action) => {
   switch (action.type) {
      case UPLOAD_NAVIGATION: return { ...state, navigation: action.payload }
      default:
         return state;
   }
}