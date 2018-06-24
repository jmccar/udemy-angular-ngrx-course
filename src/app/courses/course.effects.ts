import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    CourseActionTypes,
    CourseRequestedAction,
    CourseLoadedAction
} from './course.actions';
import { mergeMap, map } from 'rxjs/operators';
import { CoursesService } from './services/courses.service';

@Injectable()
export class CourseEffects {
    constructor(
        private _actions$: Actions,
        private _courseSvc: CoursesService
    ) {}

    @Effect()
    loadCourse$ = this._actions$.pipe(
        ofType<CourseRequestedAction>(CourseActionTypes.CourseRequested),
        mergeMap(action =>
            this._courseSvc.findCourseById(action.payload.courseId)
        ),
        map(course => new CourseLoadedAction({ course }))
    );
}
