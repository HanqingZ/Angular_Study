import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import * as fromRoot from '../state/app-state';
import { TokenModel } from '../../models/token.model';

export interface authState {
  isLoading: boolean,
  isLoggedIn: boolean,
  token: TokenModel,
  error: string
}

export interface AppState extends fromRoot.AppState {
  userStates: authState;
}

export const initState: authState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
  error: ''
}

export function AuthReducer(
  state = initState,
  action: authActions.Actions
): authState {
  switch(action.type) {
    case authActions.AuthActionTypes.LOGIN: {
      return {
        ...state,
        isLoading: true,

      }
    }
    case authActions.AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: action.payload,
        error: null
      }
    }
    case authActions.AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload
      };
    }
    case authActions.AuthActionTypes.LOGOUT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case authActions.AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        token: null
      }
    }
    default:
      return state;
  }
}

const getAuthFeatureState = createFeatureSelector<authState>(
  "user"
)

export const LoginStatus = createSelector(
  getAuthFeatureState,
  (state: authState) => state.isLoggedIn
)

export const LoadingStatus = createSelector(
  getAuthFeatureState,
  (state: authState) => state.isLoading
)

export const errorMessage = createSelector(
  getAuthFeatureState,
  (state: authState) => state.error
)

export const currentUser = createSelector(
  getAuthFeatureState,
  (state: authState) => state.token
)
