import { Injectable } from '@angular/core';
<<<<<<< master
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
=======
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModule } from '../models/user.model';
<<<<<<< master
>>>>>>> Add http request with course GET api
=======
import { TokenModel } from '../models/token.model';
import { Observable } from 'rxjs';
>>>>>>> Add login method

@Injectable({
  providedIn: 'root'
})
<<<<<<< master
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
=======
export class AuthService {
>>>>>>> Add auth guard for add course and edit course
  existUser: UserModule[];
  currentUser: UserModule = null;

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

  login(userInfo): Observable<Object> {
    if (userInfo?.email && userInfo?.password) {
      const result = this.http.post(
        `${environment.apiBaseUrl}auth/login`,
        {login: userInfo.email, password: userInfo.password}
      )
      if(result) {
        return result
      }
      // }
    }
    return null;
  }

  logout() {
    this.currentUser = null;
    console.log(`logged out`);
  }

  isAuthenticated(): Boolean {
    if(this.currentUser === null) { return false; }
    return true;
  }

<<<<<<< master
<<<<<<< master
  getUserInfo(): UserModule {
    return this.currentUser;
>>>>>>> Add Login page
=======
  getUserInfo(token): void {
=======
  getUserInfo(token: TokenModel): void {
>>>>>>> Implement load more function
    const result = this.http.post(
      `${environment.apiBaseUrl}auth/userinfo`,
      { token }
    )
>>>>>>> Add login method
  }
}
