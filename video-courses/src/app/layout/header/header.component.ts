import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
}
