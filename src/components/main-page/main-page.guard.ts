import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

import {AuthService} from "../../app/services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class MainPageGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    if (this.authService.isAuthorized) {
      return this.authService.isAuthorized;
    } else {
      this.router.navigateByUrl('/login')

      return this.authService.isAuthorized;
    }
  }
}
