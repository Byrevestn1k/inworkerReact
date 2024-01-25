import { PUSH_USEEFFECT_UPDATE } from "../constants/actions";

const initialState = { pushForUseEffectUpdate: 0 }

export const pushForUseEffectUpdate = (state = initialState, action) => {
   switch (action.type) {
      case PUSH_USEEFFECT_UPDATE: return { ...state, pushForUseEffectUpdate: state.pushForUseEffectUpdate + 1 };
      default:
         return state;
   }
}