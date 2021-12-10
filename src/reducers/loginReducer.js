import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.displayname,
                imageUrl: action.payload.imageUrl,
                email: action.payload.email
            }
            case types.logout:
                return []  
        default:
            return state
    }
}