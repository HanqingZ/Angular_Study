import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout()
    this.currentUser = false;
    this.router.navigate(['/login']);
    this.changeDetectorRef.detectChanges()
  }

  navigateTo() {
    this.router.navigate(['/courses']);
  }
}
