import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Collegues } from '../models/Collegues';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private subCollegueConnected = new BehaviorSubject<Collegues>(null);

  constructor(private httpClient: HttpClient) { }


  subCollegue() {
    return this.subCollegueConnected.asObservable();
  }

  signIn(user: string, password: string) {
    return this.httpClient.post(environment.backendUrl + `/auth`, {
      "username": user,
      "password": password
    }, { withCredentials: true });

  }

  logout() {
    return this.httpClient.post(environment.backendUrl + '/logout', null, { withCredentials: true });
  }

  collegueConnected(): Observable<Collegues> {

    return this.httpClient.get<Collegues>(environment.backendUrl + `/me`, { withCredentials: true }).pipe(
      tap(collegues => this.subCollegueConnected.next(collegues)));
  }
}


