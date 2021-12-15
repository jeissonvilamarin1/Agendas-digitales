import { typeCalendario } from "../types/types";

const initialState = {
    Calendario: []
}


export const calendariosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typeCalendario.register:
            return {
                Calendario: [action.payload]
            }
        case typeCalendario.list:
            return {
                Calendario: [...action.payload]
            }
        default:
            return state;
    }
}
