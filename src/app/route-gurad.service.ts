import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentificationService } from './hardcoded-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthenticationService: HardcodedAuthentificationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
    {
      console.log("is loged");
      
      return true;
    }
    
    console.log("  is not loged");
    this.router.navigate(['auth']);
    return false;
  }
}
