import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CandidatVote } from '../models/CandidatVote';
import { Votes } from '../models/Votes';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private dataSvc: DataService) { }

  public votes: CandidatVote[] = [];
  vote: Votes;
  err: string;
  score: boolean = false;


  ngOnInit() {
    this.dataSvc.liste()
      .subscribe(votes => {
        this.votes = votes;
      }), (error: HttpErrorResponse) => {
        this.err = error.status + ' - ' + error.error;
      };
  }

  voterPour(idCand: string) {
    let candidatVote: CandidatVote = this.votes.find(candVote => {
      return candVote.id === idCand;
    });
    if (candidatVote.score !== true) {
      this.dataSvc.voterPour(idCand).subscribe(unVote => {
        candidatVote.score = true;
      });
    }
  }

  voterContre(idCand: string) {
    let candidatVote: CandidatVote = this.votes.find(candVote => {
      return candVote.id === idCand;
    });
    if (candidatVote.score !== false) {
      this.dataSvc.voterContre(idCand).subscribe(unVote => {
        candidatVote.score = false;
      });
    }
  }
}
