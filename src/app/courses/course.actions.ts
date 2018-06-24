import { Action } from '@ngrx/store';
import { Course } from './model/course';

export enum CourseActionTypes {
    LoadCourses = '[Course] Load Courses',
    CourseRequested = '[View Course Page] Course Requested',
    CourseLoaded = '[Courses API] Course Loaded'
}

export class LoadCoursesAction implements Action {
    readonly type = CourseActionTypes.LoadCourses;
}

export class CourseLoadedAction implements Action {
    readonly type = CourseActionTypes.CourseLoaded;
    constructor(public payload: { course: Course }) {}
}

export class CourseRequestedAction implements Action {
    readonly type = CourseActionTypes.CourseRequested;
    constructor(public payload: { courseId: number }) {}
}

export type CourseActions =
    | LoadCoursesAction
    | CourseRequestedAction
    | CourseLoadedAction;
