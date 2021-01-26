import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CourseActions from '../actions/course.actions';
import * as fromRoot from '../state/app-state';
import { CourseListItem } from '../../models/course-list-item.model';

export interface courseState {
  isLoading: boolean,
  course: CourseListItem[]
  error: string
}

export interface AppState extends fromRoot.AppState {
  courses: courseState
}

export const initState: courseState = {
  isLoading: false,
  course: [],
  error: ''
}

export function CourseReducer(
  state = initState,
  action: CourseActions.Actions
): courseState {
  switch(action.type) {
    case CourseActions.CourseRequirementActionTypes.COURSE_REQUIREMENT: {
      return {
        ...state,
        isLoading: true
      }
    }
    case CourseActions.CourseRequirementActionTypes.COURSE_REQUIREMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        course: action.payload,
        error: null
      }
    }
    case CourseActions.CourseRequirementActionTypes.COURSE_REQUIREMENT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case CourseActions.CourseRequirementActionTypes.SEARCH_COURSE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CourseActions.CourseRequirementActionTypes.SEARCH_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        course: action.payload
      }
    }
    case CourseActions.CourseRequirementActionTypes.SEARCH_COURSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    case CourseActions.CourseRequirementActionTypes.DELETE_COURSE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CourseActions.CourseRequirementActionTypes.DELETE_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false
      }
    }
    case CourseActions.CourseRequirementActionTypes.DELETE_COURSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

// const getCourseListFeatureState = createFeatureSelector<courseState>(
//   "Courses"
// )

// export const CourseListStatus = createSelector(
//   getCourseListFeatureState,
//   (state: courseState) => state.course
// )

// export const LoadingStatus = createSelector(
//   getCourseListFeatureState,
//   (state: courseState) => state.isLoading
// )

// export const errorMessage = createSelector(
//   getCourseListFeatureState,
//   (state: courseState) => state.error
// )
