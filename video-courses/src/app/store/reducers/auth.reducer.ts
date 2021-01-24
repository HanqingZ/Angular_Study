import { ActionReducerMap } from '@ngrx/store';
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
  token: TokenModel;
}

export const initState: authState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
  error: ''
}

export function authReducer(
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

export const LoginStatus = (state: authState) => state.isLoggedIn;
export const LoadingStatus = (state: authState) => state.isLoading;
export const errorMessage = (state: authState) => state.error;
export const currentUser = (state: authState) => state.token;
