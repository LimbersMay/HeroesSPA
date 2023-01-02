import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from '../../../src/auth/types/types';

describe('pruebas sobre el authReducer', () => {

    const initialState = {
        logged: false, 
        user: null
    }
    
    test('debe de retorar el estado por defecto', () => {

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState) 
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                user: 'Limbers',
                id: '1234'
            }
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('debe de (logut) borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: {
                id: "199594",
                name: 'Limbers'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        expect(newState).toEqual({
            logged: false
        });
    });
    
});
