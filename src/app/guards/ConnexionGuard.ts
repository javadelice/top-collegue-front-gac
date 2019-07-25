import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../service/authservice';

@Injectable({
  providedIn: 'root'
})

export class ConnexionGuard implements CanActivate {

  constructor(private router: Router, private _userService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this._userService.collegueConnected().pipe(
      map(collegue => { return true }),
      catchError((err) => {
        this.router.navigate(['/connexion']);
        throw err;
      })
    )
  }
}
