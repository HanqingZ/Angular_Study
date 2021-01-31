import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {

  }

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
}
