import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectCourseById } from '../course.selectors';
import { CourseRequestedAction } from '../course.actions';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<Course> {
    constructor(
        private coursesService: CoursesService,
        private _store: Store<AppState>
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Course> {
        const courseId = route.params['id'];
        // return this.coursesService.findCourseById(courseId);
        return this._store.pipe(
            select(selectCourseById(courseId)),
            //  course could not be found in store by Id
            tap(course => {
                if (!course) {
                    this._store.dispatch(
                        new CourseRequestedAction({ courseId })
                    );
                }
            }),
            //  course not located in back-end api
            filter(course => !!course),
            //  complete the observable
            first()
        );
    }
}
