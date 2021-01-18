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
import { Router } from '@angular/router';
>>>>>>> Complete Debug page and modify router
import { AuthServiceService } from '../../../service/auth-service.service';
<<<<<<< master
>>>>>>> Add authentication logic
=======
import { Md5 } from 'ts-md5/dist/md5';
>>>>>>> Modify login logic

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

  constructor(
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
    private router: Router,
    private authService: AuthServiceService
  ) { }
>>>>>>> Complete Debug page and modify router

  ngOnInit(): void {

  }

<<<<<<< master
>>>>>>> Add Login page
=======
  requestLogin () {
    const userInfo = {
      email: this.email,
      password: Md5.hashStr(this.password)
    }

    const result = this.authService.login(userInfo)
    if(result.code === 0) {
      this.router.navigate(['/courses'])
    }
    console.log(result.message);

  }
>>>>>>> Modify login logic
}
