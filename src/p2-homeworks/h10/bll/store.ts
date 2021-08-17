import {loadingAC, loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from "redux";
import {changeThemeAC, themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themeReducer

});
export type ActionCreatorType = ReturnType<typeof loadingAC>
    | ReturnType<typeof changeThemeAC>

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
