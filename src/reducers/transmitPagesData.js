import { TRANSMIT_EDIT_PAGE_DATA } from "../constants/actions";

const initialState = { transmitPageData: null }

export const transmitPageData = (state = initialState, action) => {
   switch (action.type) {
      case TRANSMIT_EDIT_PAGE_DATA: return { ...state, transmitPageData: action.payload }
      default:
         return state;
   }
}