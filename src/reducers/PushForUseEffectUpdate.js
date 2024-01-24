import { HIDE_MODAL, PUSH_USEEFFECT_UPDATE, SHOW_MODAL } from "../constants/actions";

const initialState = { pushForUseEffectUpdate: 0 }

export const pushForUseEffectUpdate = (state = initialState, action) => {
   switch (action.type) {
      case PUSH_USEEFFECT_UPDATE: return { ...state, pushForUseEffectUpdate: state + 1 };
      default:
         return state;
   }
}