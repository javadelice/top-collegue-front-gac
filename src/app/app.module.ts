import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListeCandidantComponent } from './liste-candidant/liste-candidant.component';
import { ConnectionComponent } from './connection/connection.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VotesComponent } from './votes/votes.component';
import { ClassementComponent } from './classement/classement.component';
import { ConnexionGuard } from './guards/ConnexionGuard';

const routes: Routes = [
  { path: 'connexion', component: ConnectionComponent },
  {
    path: '',
    canActivate: [ConnexionGuard],
    children: [
      { path: 'votes', component: VotesComponent },
      { path: 'classement', component: ClassementComponent }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListeCandidantComponent,
    ConnectionComponent,
    NavbarComponent,
    VotesComponent,
    ClassementComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
