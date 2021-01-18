import { Injectable } from '@angular/core';
import { UserModule } from '../models/user.model';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
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
      for(let i = 0; i < this.existUser.length; i++) {
        const ele = this.existUser[i]
        if(ele.email == userInfo.email && userInfo.password == ele.password) {
          this.currentUser = ele;
          return { code: 0, message:`logged in successfully` }
        }
      }
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
  }
}
