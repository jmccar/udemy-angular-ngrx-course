import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';

interface AuthState {
    loggedIn: boolean;
    user: User;
}

// this is the app model - properties for each part of the application
export interface AppState {
    auth: AuthState;
}

function authReducer(state: AuthState, action): AuthState {
    switch (action.type) {
        case AuthActionTypes.LoginAction:
            return {
                loggedIn: true,
                user: action.payload.user
            };
        default:
            return state;
    }
}

export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? []
    : [];
