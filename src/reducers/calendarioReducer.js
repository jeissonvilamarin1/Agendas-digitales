import { typeCalendario } from "../types/types";

const initialState = {
    tasks: []
}


export const calendariosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typeCalendario.register:
            return {
                tasks: [action.payload]
            }
        case typeCalendario.list:
            return {
                tasks: [...action.payload]
            }
        default:
            return state;
    }
}
