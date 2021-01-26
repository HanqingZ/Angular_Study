import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as authActions from 'src/app/store/actions/auth.actions';
import * as fromAuth from '../../../store/reducers/auth.reducer';
import { AuthService } from '../../../service/auth-service.service';
import { TokenModel } from 'src/app/models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginFailed: Boolean = false;
  loading: boolean = false;
  token: TokenModel;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService,
    private store: Store<fromAuth.AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.loading = state.userStates.isLoading;
      this.token = state.userStates.token;
    });
  }

  requestLogin () {
    const userInfo = {
      email: this.email,
      password: this.password
    }

    this.store.dispatch(new authActions.Login(userInfo))
    this.store.dispatch(new authActions.GetUserInfo(this.token.token))
    this.router.navigate(['/courses'])

    // const token = this.authService.login(userInfo);
    // console.log(token);

    // if(localStorage.getItem) {
    //   this.loginFailed = false;
    //   this.changeDetectorRef.detectChanges()
    //   this.router.navigate(['/courses'])
    // } else {
    //   this.loginFailed = true;
    // }
  }
}
