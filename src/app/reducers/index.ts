import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';
import { routerReducer } from '@ngrx/router-store';

// this is the app model - properties for each part of the application
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [storeFreeze]
    : [];
