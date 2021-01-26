import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { AuthService } from '../../service/auth-service.service';
import * as AuthActions from '../actions/auth.actions';
import { TokenModel } from 'src/app/models/token.model';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<AuthActions.Login>(AuthActions.AuthActionTypes.LOGIN),
    switchMap((actions: AuthActions.Login) =>
      this.authService.login(actions.payload).pipe(
        map((token: TokenModel) =>
          new AuthActions.LoginSuccess(token)
        ),
        catchError(err => of(new AuthActions.LoginFailure(err)))
      )
    )
  )

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.LOGOUT),

  )
}
