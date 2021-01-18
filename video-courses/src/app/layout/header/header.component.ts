<<<<<<< master
<<<<<<< master
<<<<<<< master
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service.service'
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
<<<<<<< master
<<<<<<< master
<<<<<<< master
  public currentUser;

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.isAuthenticated();
=======
=======
  @Input() user;
>>>>>>> Add auth guard for add course and edit course
  currentUser: string;
=======
  public currentUser;
>>>>>>> Modify Login logic

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
<<<<<<< master
<<<<<<< master
    const result = this.authService.getUserInfo()
    if(result) {
      this.currentUser = result.firstName;
    }
>>>>>>> Add auth guard for several pages
=======
>>>>>>> Add auth guard for add course and edit course
=======
    this.currentUser = this.authService.isAuthenticated();
>>>>>>> Modify Login logic
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
}
