import { typeportada } from "../types/types";

const initialState = {
    portada: []
}


export const portadaReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeportada.portada:
            return {
                portada: [action.payload]
            }
        default:
            return state;
    }
}
