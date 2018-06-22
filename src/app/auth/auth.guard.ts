import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private _store: Store<AppState>, private _router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this._store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this._router.navigateByUrl('/login');
                }
            })
        );
    }
}
