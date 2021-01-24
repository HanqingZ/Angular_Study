import { Action } from '@ngrx/store';
import { TokenModel } from '../../models/token.model';


export enum AuthActionTypes {
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAILURE = '[User] Login Failure',
  LOGOUT = '[User] Logout',
  LOGOUT_SUCCESS = '[User] Logout Success'
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

export type Actions = Login | LoginSuccess | LoginFailure | Logout | LogoutSuccess;
