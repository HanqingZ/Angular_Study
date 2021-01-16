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
        password: "password"
      }
    ]
  }

  login(userInfo) {
    console.log(Md5.hashStr("password"));
    if (userInfo?.email && userInfo?.password) {
      this.existUser.map(ele => {
        if(ele.email === userInfo.email){
          const mdPassword = Md5.hashStr(userInfo.password)
          if (mdPassword === ele.password) {
            this.currentUser = ele;
            return `${ele.firstName} is login`
          }
        }
      })
    }

    return "error"
  }

  logout(userInfo) {
    this.currentUser = null;
  }

  isAuthenticated(): Boolean {
    if(this.currentUser === null) { return false; }
    return true;
  }

  getUserInfo(): UserModule {
    return this.currentUser;
  }
}
