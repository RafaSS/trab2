import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CanActiveService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = JSON.parse(localStorage.getItem('user'));
    if (state.url.includes('auth') && user) {
      this.router.navigate(['/inicio']);
      return false;
    } else if (!state.url.includes('auth') && !user) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
