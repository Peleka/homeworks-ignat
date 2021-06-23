import {ActionCreatorType} from "./store";

const IS_LOADING = 'IS_LOADING'

const initState = {
    isLoading: false as boolean
};

export type InitialStateType = typeof initState

export const loadingReducer = (state: InitialStateType = initState, action: ActionCreatorType): InitialStateType => { // fix any
    switch (action.type) {
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.statusLoading
            }
        }
        default: return state;
    }
};

type LoadingActionType = {
    type: typeof IS_LOADING
    statusLoading: boolean

}
export const loadingAC = (statusLoading: boolean): LoadingActionType => ({type: IS_LOADING, statusLoading} as const); // fix any