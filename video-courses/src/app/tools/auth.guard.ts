import { Injectable } from '@angular/core';
<<<<<<< master
<<<<<<< master
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth-service.service'
=======
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service'
>>>>>>> Add auth guard for several pages
=======
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth-service.service'
>>>>>>> Add auth guard for add course and edit course

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
<<<<<<< master
<<<<<<< master
    private authService: AuthService,
=======
    private authService: AuthServiceService,
>>>>>>> Add auth guard for several pages
=======
    private authService: AuthService,
>>>>>>> Add auth guard for add course and edit course
    private router: Router
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    const user =  this.authService.isAuthenticated()
    if(user) return true;

    this.router.navigate(['/courses'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
