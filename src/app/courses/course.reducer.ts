import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Course } from './model/course';
import { Lesson } from './model/lesson';
import { CourseActions } from './course.actions';

export interface CoursesState extends EntityState<Course> {
}

export interface LessonsState extends EntityState<Lesson> {
}

export const courseAdapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export function reducer(state, action: CourseActions): CoursesState {
    switch (action.type) {
        default:
            return state;
    }
}
