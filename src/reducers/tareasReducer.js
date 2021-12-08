import { typeTareas } from "../types/types";

const initialState = {
    tasks: []
}


export const tasksReducers = (state = initialState, action) => {
    switch (action.type) {
        case typeTareas.register:
            return {
                tasks: [action.payload]
            }
        case typeTareas.list:
            return {
                tasks: [...action.payload]
            }
        case typeTareas.delete:
            return {
                tasks: state.tasks.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}
