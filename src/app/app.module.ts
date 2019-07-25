import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeCandidantComponent } from './liste-candidant/liste-candidant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCandidantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
