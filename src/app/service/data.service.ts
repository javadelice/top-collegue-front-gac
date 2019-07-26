import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const URL_BACKEND = environment.backendUrl;

import { CandidatClassement } from '../models/CandidatClassement';
import { CandidatVote } from '../models/CandidatVote';
import { Votes } from '../models/Votes';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {

  }

  private voteSelect = new Subject<boolean>();

  getClassement(): Observable<CandidatClassement[]> {
    return this.http.get<CandidatClassement[]>(`${URL_BACKEND}/classement`, { withCredentials: true });
  }

  abonnementVote(unVote: boolean) {
    return this.voteSelect.asObservable();
  }

  publierVote(unVote: boolean) {
    return this.voteSelect.next(unVote);
  }


  liste(): Observable<CandidatVote[]> {
    return this.http.get<CandidatVote[]>(`${URL_BACKEND}/votes`, { withCredentials: true });
  }

  voterPour(idCand: string): Observable<Votes> {
    return this.http.post<Votes>(`${URL_BACKEND}/vote`, {"idCandidate" : idCand, "score" : true}, { withCredentials: true });
  }

  voterContre(idCand: string): Observable<Votes> {
    return this.http.post<Votes>(`${URL_BACKEND}/vote`, {"idCandidate" : idCand, "score" : false}, { withCredentials: true });
  }

}
