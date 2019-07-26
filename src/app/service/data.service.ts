import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Votes } from '../models/Votes';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {


  private voteSelect = new Subject<boolean>();

  abonnementVote(unVote: boolean) {
    return this.voteSelect.asObservable();
  }

  publierVote(unVote: boolean) {
    return this.voteSelect.next(unVote);
  }

  constructor(private httpClient: HttpClient) {
  }

  liste(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URL_BACKEND}/liste`, { withCredentials: true });
  }

  voter(vote: Votes): Observable<Votes> {
    return this.httpClient.post<Votes>(`${URL_BACKEND}`, vote, { withCredentials: true });
  }

}
