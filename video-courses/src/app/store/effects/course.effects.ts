import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CoursesService } from '../../service/courses.service';
import * as CourseActions from '../actions/course.actions';
import { CourseListItem } from 'src/app/models/course-list-item.model';

@Injectable()
export class CourseEffect {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType<CourseActions.CourseRequirement>(CourseActions.CourseRequirementActionTypes.COURSE_REQUIREMENT),
    mergeMap((actions: CourseActions.CourseRequirement) =>
      this.coursesService.getMoreCourse(actions.payload).pipe(
        map((courseList: CourseListItem[]) =>
          new CourseActions.CourseRequirementSuccess(courseList)
        ),
        catchError(err => of(new CourseActions.CourseRequirementFailure(err)))
      )
    )
  )

  @Effect()
  searchCourses$: Observable<Action> = this.actions$.pipe(
    ofType<CourseActions.SearchCourse>(CourseActions.CourseRequirementActionTypes.SEARCH_COURSE),
    mergeMap((actions: CourseActions.SearchCourse) =>
      this.coursesService.getItemByName(actions.payload).pipe(
        map((courseList: CourseListItem[]) =>
          new CourseActions.SearchCourseSuccess(courseList)
        ),
        catchError(err => of(new CourseActions.SearchCourseFailure(err)))
      )
    )
  )
}
