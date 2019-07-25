import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  logout() {

    return this._authService.logout().subscribe();

  }

}
