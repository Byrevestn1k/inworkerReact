import { TRANSMIT_EDIT_PAGE_NAME } from "../constants/actions";

const initialState = { collection: `` }

export const transmitPageName = (state = initialState, action) => {
   switch (action.type) {
      case TRANSMIT_EDIT_PAGE_NAME: return { ...state, collection: action.payload };
      default:
         return state;
   }
}