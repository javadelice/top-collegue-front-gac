import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConnexionGuard implements CanActivate {

  constructor(private router: Router, private _userService: DataService) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return of(true);
  }


}
