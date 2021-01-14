import { Injectable } from '@angular/core';
import { UserModule } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
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
  }
}
