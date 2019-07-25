import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authservice';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private _authservice: AuthService) { }

  password: string;
  username: string;

  error: boolean = false;

  connection() {
    this._authservice.signIn(this.username, this.password).subscribe(() => { this.error = false },
      (respError: HttpErrorResponse) => { this.error = true });
  }

  ngOnInit() {
  }

}
