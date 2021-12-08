import { typeMetas } from "../types/types";

const initialState = {
    Meta: []
}


export const MetaReducers = (state = initialState, action) => {
    switch (action.type) {
        case typeMetas.register:
            return {
                Meta: [action.payload]
            }
        case typeMetas.list:
            return {
                Meta: [...action.payload]
            }
        case typeMetas.delete:
            return {
                Meta: state.Meta.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}