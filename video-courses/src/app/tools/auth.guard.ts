import { Injectable } from '@angular/core';
<<<<<<< master
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth-service.service'
=======
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service'
>>>>>>> Add auth guard for several pages

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
<<<<<<< master
    private authService: AuthService,
=======
    private authService: AuthServiceService,
>>>>>>> Add auth guard for several pages
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
