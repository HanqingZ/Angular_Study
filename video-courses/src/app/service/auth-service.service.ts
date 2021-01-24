import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
import { TokenModel } from '../models/token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  existUser: UserModel[];
  isLogin = null;

  constructor(private http: HttpClient) {
  }

  login(userInfo): Observable<object> {
    if (userInfo?.email && userInfo?.password) {
      console.log("login service");

      return this.http.post(
        `${environment.apiBaseUrl}auth/login`,
        {login: userInfo.email, password: userInfo.password}
      )
      // this.http.post(
      //   `${environment.apiBaseUrl}auth/login`,
      //   {login: userInfo.email, password: userInfo.password}
      // ).subscribe((data: TokenModel) => {
      //   console.log(data);
      //   if(data?.token) {
      //     localStorage.setItem("token", data.token)
      //     this.getUserInfo(data.token)
      //     return data.token;
      //   }
      // })
    }
    return null;
  }

  logout() {
    this.isLogin = false;
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    console.log(`logged out`);
  }

  isAuthenticated() {
    return localStorage.getItem("username");
  }

  getUserInfo(token: string): void {
    this.http.post(
      `${environment.apiBaseUrl}auth/userinfo`,
      { token }
    ).subscribe((data: UserModel) => {
      if(data?.name?.first) {
        localStorage.setItem("username", data.name.first)
      }
    })
  }
}
