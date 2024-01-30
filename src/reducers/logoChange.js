import inworker_shapka from '../../src/images/header/inworker_shapka.jpg';
import { LOGO_CHANGE, PUSH_USEEFFECT_UPDATE } from "../constants/actions";

const initialState = { logoChanger: `` }

export const logoChange = (state = initialState, action) => {
   switch (action.type) {
      case LOGO_CHANGE: return { ...state, logoChanger: action.payload };
      default:
         return state;
   }
}