import '@testing-library/jest-dom';
import { types } from '../types/types';
import { loginReducer } from './loginReducer';

describe('Pruebas en LoginReducer', () => {
      test('debe realizar el login', () => {
            const initState = {};
            const action = {
                  type: types.login,
                  payload: {
                        id:'12345',
                        displayname: 'Jeisson',
                        email: 'jeisson@gmail.com',
                        photoURL: 'www.foto.com'
                  }
            };
            const state = loginReducer(initState, action);
            expect(state).toEqual({
              id: "12345",
              name: "Jeisson",
              email: "jeisson@gmail.com",
              photoURL: "www.foto.com",
            });

            
      })
      
      test('Cerrar sesion - logout ', () => {
            const initState = {
              id: "12345",
              displayname: "Jeisson",
              email: "jeisson@gmail.com",
              photoURL: "www.foto.com",
            };
            const action = {
                  type: types.logout
            }
            const state = loginReducer(initState, action);
            expect(state).toEqual([])
      })

      test("State por default ", () => {
        const initState = {};
        const action = {
          type: types.Hola,
        };
        const state = loginReducer(initState, action);
        expect(state).toEqual(initState);
      });
})