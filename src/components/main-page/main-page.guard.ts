import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

import {AuthService} from "../../app/services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class MainPageGuard implements CanActivate{

  constructor(private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    return this.authService.isAuthorized;
  }
}
