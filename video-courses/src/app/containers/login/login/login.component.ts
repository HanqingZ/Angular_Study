<<<<<<< master
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth-service.service';
=======
import { Component, OnInit } from '@angular/core';
<<<<<<< master
>>>>>>> Add Login page
=======
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

  ngOnInit(): void {

  }

<<<<<<< master
>>>>>>> Add Login page
=======
  requestLogin () {
    console.log(this.email, this.password);

    Md5.hashStr(this.password)
    const userInfo = {
      email: this.email,
      password: Md5.hashStr(this.password)
    }
    const result = this.authService.login(userInfo)
    console.log(result.message);
  }
>>>>>>> Modify login logic
}
