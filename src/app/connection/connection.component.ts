import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authservice';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private _authservice: AuthService, private router: Router) { }

  password: string;
  username: string;
  pictureUrl?: string;

  error: boolean = false;

  connection() {
    this._authservice.signIn(this.username, this.password, this.pictureUrl).subscribe(() => { this.error = false, this.router.navigate([`/votes`]) },
      (respError: HttpErrorResponse) => { this.error = true });
  }

  ngOnInit() {
  }

}
