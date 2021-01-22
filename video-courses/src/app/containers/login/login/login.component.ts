import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginFailed: Boolean = false;
  loading: boolean = true;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loading = false;
  }

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
}
