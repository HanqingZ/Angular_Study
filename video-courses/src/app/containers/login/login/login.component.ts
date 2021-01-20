import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth-service.service';
import { TokenModel } from '../../../models/token.model';

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
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  requestLogin () {
    const userInfo = {
      email: this.email,
      password: this.password
    }

    let result;
    this.authService.login(userInfo).subscribe((data: TokenModel) => {
      console.log(data);
      result = data
      if(result?.token) {
        this.router.navigate(['/courses'])
      } else {
        console.log("failed");
      }
    });

  }
}
