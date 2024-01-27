import { UPLOAD_CATEGIRIES } from "../constants/actions";

const initialState = { uploadCategories: 0 }

export const uploadCategories = (state = initialState, action) => {
   switch (action.type) {
      case UPLOAD_CATEGIRIES: return { ...state, uploadCategories: action.payload };
      default:
         return state;
   }
}