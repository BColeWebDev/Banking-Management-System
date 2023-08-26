import { Subscription, Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){}
  canActivate(){
    console.log("called",this.authService.getUserToken())
    if(this.authService.getUserToken() !== null ){
      return true;
    }
    else{
      this.router.navigateByUrl('/auth/login');
      return false
    }
   
  }
}
