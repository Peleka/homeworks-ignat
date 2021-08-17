import {ActionCreatorType} from "../../h10/bll/store";

const SET_THEME = "SET_THEME"


const initState = {
    theme: 'some' as string
};

type InitialStateType = typeof initState;


export const themeReducer = (state: InitialStateType = initState, action: ActionCreatorType): InitialStateType => {
    switch (action.type) {
        case SET_THEME: {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string) => ({type: SET_THEME, theme} as const);