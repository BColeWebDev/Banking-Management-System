import { Subscription, Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private authService: AuthService) {}

//   canActivate(): Observable<boolean> {
//     return this.authService.getUser().pipe(
//       map(user => {
//         if (user !== null) {
//           return true;
//         }

//         this.router.navigateByUrl('/auth/login');
//         return false;
//       })
//     );
//   }