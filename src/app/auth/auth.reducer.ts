import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
    loggedIn: boolean;
    user: User;
}

const initialState: AuthState = {
    loggedIn: false,
    user: undefined
};

export function reducer(
    state: AuthState = initialState,
    action: AuthActions
): AuthState {
    switch (action.type) {
        case AuthActionTypes.LoginAction:
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            };
        case AuthActionTypes.LogoutAction:
            // could be initialState
            return {
                ...state,
                loggedIn: false,
                user: undefined
            };
        default:
            return state;
    }
}
