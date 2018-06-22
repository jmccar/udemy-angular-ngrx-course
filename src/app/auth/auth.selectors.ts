import { createSelector } from "@ngrx/store";

// feature selector
export const selectAuthState = state => state.auth;

// selector function, projector function
export const isLoggedIn = createSelector( selectAuthState,  auth => auth.loggedIn);
export const isLoggedOut = createSelector( isLoggedIn,  loggedIn => !loggedIn);
