import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModule } from '../models/user.model';
import { TokenModel } from '../models/token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  getUserInfo(token): void {
    const result = this.http.post(
      `${environment.apiBaseUrl}auth/userinfo`,
      { token }
    )
  }
}
