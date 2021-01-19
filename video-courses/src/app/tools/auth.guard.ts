import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
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
