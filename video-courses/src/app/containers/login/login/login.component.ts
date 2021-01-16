import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  loginFailed: Boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

}
