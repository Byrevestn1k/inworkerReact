import { createStore, combineReducers } from "redux";
import { uploadNavigation } from "../reducers/uploadNavigation";
import { showModal } from "../reducers/showModal";
import { pushForUseEffectUpdate } from "../reducers/PushForUseEffectUpdate";
import { uploadCategories } from "../reducers/uploadCategories";
import { transmitPageData } from "../reducers/transmitPagesData";
import { transmitPageName } from "../reducers/transmitPageName";
import { logoChange } from "../reducers/logoChange";
import { authReducer } from '../reducer/auth.reducer';



const navigationReducer = combineReducers({
    navigation: uploadNavigation,
    showModal: showModal,
    pushForUseEffectUpdate: pushForUseEffectUpdate,
    uploadCategories: uploadCategories,
    transmitPageData: transmitPageData,
    collection: transmitPageName,
    logoChanger: logoChange,
    authReducer:authReducer,
})

const store = createStore(navigationReducer);
export default store;