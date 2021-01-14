import { Injectable } from '@angular/core';
<<<<<<< master
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserModule } from '../models/user.model';
import { TokenModel } from '../models/token.model';
=======
import { UserModule } from '../models/user.model';
>>>>>>> Add Login page

@Injectable({
  providedIn: 'root'
})
<<<<<<< master
export class AuthService {
  existUser: UserModule[];
  isLogin = null;

  constructor(private http: HttpClient) {
    // this.existUser = [
    //   {
    //     id: 1,
    //     name: {
    //       firstName: "David",
    //       lastName: "Minsk"
    //     },
    //     token: "jfkdlangvfaklvfdna",
    //     login: "example@gmail.com",
    //     password: "5f4dcc3b5aa765d61d8327deb882cf99"
    //   }
    // ]
  }

  login(userInfo): string {
    if (userInfo?.email && userInfo?.password) {
      this.http.post(
        `${environment.apiBaseUrl}auth/login`,
        {login: userInfo.email, password: userInfo.password}
      ).subscribe((data: TokenModel) => {
        console.log(data);
        if(data?.token) {
          localStorage.setItem("token", data.token)
          this.getUserInfo(data.token)
          return data.token;
        }
      })
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
    ).subscribe((data: UserModule) => {
      if(data?.name?.first) {
        localStorage.setItem("username", data.name.first)
      }
    })
=======
export class AuthServiceService {
  currentUser: UserModule;

  constructor() { }

  login(token) {

  }

  logout(token) {

  }

  isAuthenticated(): Boolean {
    return true;
  }

  getUserInfo(): UserModule {
    return this.currentUser;
>>>>>>> Add Login page
  }
}
