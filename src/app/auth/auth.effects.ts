import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginAction, AuthActionTypes, LogoutAction } from './auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';

@Injectable()
export class AuthEffects {
    @Effect({ dispatch: false })
    login$ = this.actions$.pipe(
        ofType<LoginAction>(AuthActionTypes.LoginAction),
        tap(action =>
            localStorage.setItem('user', JSON.stringify(action.payload.user))
        )
    );

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType<LogoutAction>(AuthActionTypes.LogoutAction),
        tap(action => {
            localStorage.removeItem('user');
            this._router.navigateByUrl('/login');
        })
    );

    @Effect()
    init$ = defer(() => {
        const user = localStorage.getItem('user');
        if (user) {
            return of(new LoginAction({user: JSON.parse(user)}));
        } else {
            return of(new LogoutAction());
        }
    });

    constructor(private actions$: Actions, private _router: Router) {}
}
