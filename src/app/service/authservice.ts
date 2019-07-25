import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private httpClient: HttpClient) { }


  signIn(user: string, password: string) {
    return this.httpClient.post(environment.backendUrl + `/auth`, {
      "username": user,
      "password": password
    }, { withCredentials: true });

  }

  logout() {
    return this.httpClient.post(environment.backendUrl + '/logout', null,{ withCredentials: true });
  }

}
