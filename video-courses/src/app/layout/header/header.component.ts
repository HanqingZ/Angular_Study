import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user;
  currentUser: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const result = this.authService.getUserInfo()
    if(result) {
      this.currentUser = result.firstName;
    }
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
}
