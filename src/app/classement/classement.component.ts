import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { CandidatClassement } from '../models/CandidatClassement';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  public classement: CandidatClassement[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getClassement().subscribe(classement => {
      this.classement = classement;
      console.log(classement);
    });
  }

}
