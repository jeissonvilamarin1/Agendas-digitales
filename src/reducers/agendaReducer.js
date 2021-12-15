import { typeagenda } from "../types/types";

const initialState = {
    agenda: []
}


export const agendaReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeagenda.register:
            return {
                agenda: [action.payload]
            }
        default:
            return state;
    }
}
