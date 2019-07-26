import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Collegues } from '../models/Collegues';
import { Votes } from '../models/Votes';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private _dataSvc: DataService) { }

  lisColl: any[];
  err: string;
  score: boolean = false;
  collegue: Collegues = new Collegues();
  vote: Votes = new Votes();


  ngOnInit() {
    this._dataSvc.liste()
      .subscribe(listeCollegues => {
        this.lisColl = listeCollegues;
      }), (error: HttpErrorResponse) => {
        this.err = error.status + ' - ' + error.error;
      };
  }

  voterPour() {
    if (this.score !== true) {
      this._dataSvc.voter(this.vote).subscribe(unVote => {
        this.score = true;
        this._dataSvc.publierVote(this.score);
      });
    }
  }

  voterContre() {
    if (this.score !== false) {
      this._dataSvc.voter(this.vote).subscribe(unVote => {
        this.score = false;
        this._dataSvc.publierVote(this.score);
      });
    }
  }
}
