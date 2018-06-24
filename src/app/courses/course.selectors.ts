import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoursesState } from './course.reducer';

// feature selector
export const selectCoursesState = createFeatureSelector<CoursesState>(
    'courses'
);

// selector function, projector function
export const selectCourseById = (courseId: number) =>
    createSelector(
        selectCoursesState,
        coursesState => coursesState.entities[courseId]
    );
