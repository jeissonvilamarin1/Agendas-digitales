import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Verificar types', () => {
      test('comparar objetos', () => {
            expect(types).toEqual({
              login: '[Auth] Login',
              logout: '[Auth] Logout',
              getProfile: '[GET] Profile',
            });
      })
      
})