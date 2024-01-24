import { createStore, combineReducers } from "redux";
import { uploadNavigation } from "../reducers/uploadNavigation";
import { showModal } from "../reducers/showModal";
import { pushForUseEffectUpdate } from "../reducers/PushForUseEffectUpdate";



const navigationReducer = combineReducers({
    navigation: uploadNavigation,
    showModal: showModal,
    pushForUseEffectUpdate: pushForUseEffectUpdate
})

const store = createStore(navigationReducer);
export default store;