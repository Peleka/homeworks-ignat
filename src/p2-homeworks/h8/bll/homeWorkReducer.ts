import {ActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let deepCopyState = state.map(u => ({...u}))
            if(action.payload === 'up') {
                return deepCopyState.sort((a,b) => a.name > b.name ? 1 : -1)
            }
            if(action.payload === 'down') {
                return deepCopyState.sort((a,b) => a.name < b.name ? 1 : -1)
            }
            return deepCopyState
        }
        case 'check': {
            let deepCopyState = state.map(u => ({...u}))
            return deepCopyState.filter(u => u.age > action.payload)
        }
        default: return state
    }
}