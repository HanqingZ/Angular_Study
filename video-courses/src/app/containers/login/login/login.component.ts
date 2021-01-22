<<<<<<< master
<<<<<<< master
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth-service.service';
=======
import { Component, OnInit } from '@angular/core';
<<<<<<< master
<<<<<<< master
>>>>>>> Add Login page
=======
=======
=======
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
>>>>>>> Modify Login logic
import { Router } from '@angular/router';
<<<<<<< master
>>>>>>> Complete Debug page and modify router
import { AuthServiceService } from '../../../service/auth-service.service';
<<<<<<< master
>>>>>>> Add authentication logic
=======
=======
import { AuthService } from '../../../service/auth-service.service';
<<<<<<< master
<<<<<<< master
>>>>>>> Add auth guard for add course and edit course
import { Md5 } from 'ts-md5/dist/md5';
>>>>>>> Modify login logic
=======
import { TokenModel } from '../../../models/token.model';
>>>>>>> Add login method
=======
>>>>>>> Modify Login logic

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
<<<<<<< master
<<<<<<< master
  email: string;
  password: string;
  loginFailed: Boolean = false;
  loading: boolean = true;

  constructor(
<<<<<<< master
<<<<<<< master
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  requestLogin () {
    const userInfo = {
      email: this.email,
      password: this.password
    }

    const token = this.authService.login(userInfo);
    console.log(token);

    if(localStorage.getItem) {
      this.loginFailed = false;
      this.changeDetectorRef.detectChanges()
      this.router.navigate(['/courses'])
    } else {
      this.loginFailed = true;
    }
  }
=======
  email: String;
  password: String;
  loginFailed: Boolean = true;
=======
  email: string;
  password: string;
  loginFailed: Boolean = false;
>>>>>>> Modify login logic

  constructor(private authService: AuthServiceService) { }
=======
=======
    private changeDetectorRef: ChangeDetectorRef,
>>>>>>> Modify Login logic
    private router: Router,
    private authService: AuthService
  ) { }
>>>>>>> Complete Debug page and modify router

  ngOnInit(): void {
    this.loading = false;
  }

<<<<<<< master
>>>>>>> Add Login page
=======
  requestLogin () {
    const userInfo = {
      email: this.email,
      password: this.password
    }

    this.loading = true;

    const token = this.authService.login(userInfo);
    console.log(token);

    if(localStorage.getItem) {
      this.loginFailed = false;
      this.changeDetectorRef.detectChanges()
      this.router.navigate(['/courses'])
    } else {
      this.loginFailed = true;
    }

    this.loading = false;
  }
>>>>>>> Modify login logic
}
