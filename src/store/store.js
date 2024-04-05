import { createStore, combineReducers } from "redux";
import { uploadNavigation } from "../reducers/uploadNavigation";
import { showModal } from "../reducers/showModal";
import { pushForUseEffectUpdate } from "../reducers/PushForUseEffectUpdate";
import { uploadCategories } from "../reducers/uploadCategories";
import { transmitPageData } from "../reducers/transmitPagesData";
import { transmitPageName } from "../reducers/transmitPageName";
import { logoChange } from "../reducers/logoChange";
import alertReducer from "../auth/reducer/alert.reducer";
import authReducer from "../auth/reducer/auth.reducer";
import { showMenu } from "../reducers/showMenu";



const navigationReducer = combineReducers({
    navigation: uploadNavigation,
    showModal: showModal,
    pushForUseEffectUpdate: pushForUseEffectUpdate,
    uploadCategories: uploadCategories,
    transmitPageData: transmitPageData,
    collection: transmitPageName,
    logoChanger: logoChange,
    alertReducer:alertReducer,
    authReducer:authReducer,
    showMenu:showMenu,
})

const store = createStore(navigationReducer);
export default store;