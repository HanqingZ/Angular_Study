import { Injectable } from '@angular/core';
<<<<<<< master
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserModule } from '../models/user.model';
import { TokenModel } from '../models/token.model';
=======
import { UserModule } from '../models/user.model';
<<<<<<< master
>>>>>>> Add Login page
=======
import { Md5 } from 'ts-md5/dist/md5';
>>>>>>> Add authentication logic

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
  existUser: UserModule[];
  currentUser: UserModule = null;

  constructor() {
    this.existUser = [
      {
        id: 1,
        firstName: "David",
        lastName: "Minsk",
        email: "example@gmail.com",
        password: "5f4dcc3b5aa765d61d8327deb882cf99"
      }
    ]
  }

  login(userInfo) {
    if (userInfo?.email && userInfo?.password) {
      this.existUser.map(ele => {
        console.log(userInfo);
        if(ele.email == userInfo.email && userInfo.password == ele.password) {
          console.log(true);
          this.currentUser = ele;
          return { code: 0, message:`logged in successfully` }
          console.log(this.currentUser);

        }

      })
    }
    return { code: 400, message: "error" }
  }

  logout() {
    this.currentUser = null;
    console.log(`logged out`);
  }

  isAuthenticated(): Boolean {
    if(this.currentUser === null) { return false; }
    return true;
  }

  getUserInfo(): UserModule {
    return this.currentUser;
>>>>>>> Add Login page
  }
}
