import { types } from "../types/types";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case types.getProfile:
          return action.payload;  
        default:
            return state
    }
}