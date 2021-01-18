import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../service/auth-service.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginFailed: Boolean = false;

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {

  }

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
}
