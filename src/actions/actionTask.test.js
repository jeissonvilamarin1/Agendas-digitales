import configureStore from "redux-mock-store"; //ES6 modules
import thunk from 'redux-thunk'
import { registerTasks } from "./tasksAction";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
      login:{
            id: 'TESTING'
      }
};

let store = mockStore(initState)

describe('Pruebas con las acciones task', () => {
      beforeEach(() => {
            store= mockStore(initState)
      })

      test('Crear tareas', async() => {
            let newarray = ['comer', 'dormir']
            await store.dispatch(registerTasks({
                  tareas: ['vivir', 'comer'],
                  id: 123
            }))
            const actions = store.getActions()
      })
      
})