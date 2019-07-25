import { Injectable } from '@angular/core';
import { CandidatClassement } from '../models/CandidatClassement';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  BACKEND_URL = environment.backendUrl;

  constructor(private http: HttpClient) {

  }

  getClassement(): Observable<CandidatClassement[]> {
    return this.http.get<CandidatClassement[]>(this.BACKEND_URL + '/classement', {withCredentials: true});
  }


}
