import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './reducers';
import { LogoutAction } from './auth/auth.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    ngOnInit() {}

    logout() {
        this._store.dispatch(new LogoutAction());
    }
}
