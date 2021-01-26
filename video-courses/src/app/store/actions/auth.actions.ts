import { Action } from '@ngrx/store';
import { TokenModel } from '../../models/token.model';
import { UserModel } from '../../models/user.model';


export enum AuthActionTypes {
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAILURE = '[User] Login Failure',
  LOGOUT = '[User] Logout',
  LOGOUT_SUCCESS = '[User] Logout Success',
  GET_USER_INFO = '[User] Get User Info',
  GET_USER_INFO_SUCCESS = '[User] Get User Info Success',
  GET_USER_INFO_FAILURE = '[User] Get User Info Failure'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(
    public payload: {
      email: string,
      password: string
    }
  ) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(
    public payload: TokenModel
  ) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
}

export class GetUserInfo implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO;
  constructor(
    public payload: string
  ) {}
}

export class GetUserInfoSuccess implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO_SUCCESS;
  constructor(
    public payload: UserModel
  ) {}
}

export class GetUserInfoFailure implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO_FAILURE;
  constructor(public payload: string) {}
}

export type Actions =
   Login
 | LoginSuccess
 | LoginFailure
 | Logout
 | LogoutSuccess
 | GetUserInfo
 | GetUserInfoSuccess
 | GetUserInfoFailure;
