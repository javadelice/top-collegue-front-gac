import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authservice';
import { Collegues } from '../models/Collegues';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  col: Collegues;
  subAction: Subscription;

  logout() {

    return this._authService.logout().subscribe (
      () => this.col = undefined
    );

  }


  ngOnInit() {
    this.subAction = this._authService.subCollegue().subscribe(collegue => (this.col = collegue));
  }


}
