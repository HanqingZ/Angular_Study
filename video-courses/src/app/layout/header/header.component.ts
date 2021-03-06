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
>>>>>>> Add router to login page
=======
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
>>>>>>> Modify Login logic
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service.service'
>>>>>>> Add auth guard for add course and edit course

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

<<<<<<< master
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) { }
=======
  constructor(private router: Router, private authService: AuthServiceService) { }
>>>>>>> Add router to login page

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
<<<<<<< master
<<<<<<< master
    this.currentUser = false;
    this.router.navigate(['/login']);
    this.changeDetectorRef.detectChanges()
  }

  navigateTo() {
    this.router.navigate(['/courses']);
=======
    this.router.navigate(['/login']);
>>>>>>> Add router to login page
=======
    this.currentUser = false;
    this.router.navigate(['/login']);
    this.changeDetectorRef.detectChanges()
  }

  navigateTo() {
    this.router.navigate(['/courses']);
>>>>>>> Modify Login logic
  }
}
