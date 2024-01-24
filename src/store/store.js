import { createStore, combineReducers } from "redux";
import { uploadNavigation } from "../reducers/uploadNavigation";



const navigationReducer = combineReducers({
    navigation: uploadNavigation,
})

const store = createStore(navigationReducer);
export default store;