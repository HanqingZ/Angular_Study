import { Action } from '@ngrx/store';
import { CourseListItem } from '../../models/course-list-item.model';


export enum CourseRequirementActionTypes {
  COURSE_REQUIREMENT = '[Course Page] Get Course',
  COURSE_REQUIREMENT_SUCCESS = '[Course Page] Get Course Success',
  COURSE_REQUIREMENT_FAILURE = '[Course Page] Get Course Failure',
  SEARCH_COURSE = '[Course Page] Search Course',
  SEARCH_COURSE_SUCCESS = '[Course Page] Search Course Success',
  SEARCH_COURSE_FAILURE = '[Course Page] Search Course Failure',
  DELETE_COURSE = "[Course Page] Delete Course",
  DELETE_COURSE_SUCCESS = "[Course Page] Delete Course Success",
  DELETE_COURSE_FAILURE = "[Course Page] Delete Course Failure"
}

export class CourseRequirement implements Action {
  readonly type = CourseRequirementActionTypes.COURSE_REQUIREMENT;
  constructor(public payload: number) {}
}

export class CourseRequirementSuccess implements Action {
  readonly type = CourseRequirementActionTypes.COURSE_REQUIREMENT_SUCCESS;
  constructor(public payload: CourseListItem[]) {}
}

export class CourseRequirementFailure implements Action {
  readonly type = CourseRequirementActionTypes.COURSE_REQUIREMENT_FAILURE;
  constructor(public payload: string) {}
}

export class SearchCourse implements Action {
  readonly type = CourseRequirementActionTypes.SEARCH_COURSE;
  constructor(public payload: string) {}
}

export class SearchCourseSuccess implements Action {
  readonly type = CourseRequirementActionTypes.SEARCH_COURSE_SUCCESS;
  constructor(public payload: CourseListItem[]) {}
}

export class SearchCourseFailure implements Action {
  readonly type = CourseRequirementActionTypes.SEARCH_COURSE_FAILURE;
  constructor(public payload: string) {}
}

export class DeleteCourse implements Action {
  readonly type = CourseRequirementActionTypes.DELETE_COURSE;
  constructor(public payload: number) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = CourseRequirementActionTypes.DELETE_COURSE_SUCCESS;
}

export class DeleteCourseFailure implements Action {
  readonly type = CourseRequirementActionTypes.DELETE_COURSE_FAILURE;
  constructor(public payload: string) {}
}

export type Actions =
   CourseRequirement
 | CourseRequirementSuccess
 | CourseRequirementFailure
 | SearchCourse
 | SearchCourseSuccess
 | SearchCourseFailure
 | DeleteCourse
 | DeleteCourseSuccess
 | DeleteCourseFailure;
