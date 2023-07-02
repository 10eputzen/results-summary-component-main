import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreResultComponent } from './score-result/score-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreResultComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ScoreResultComponent]
})
export class AppModule { }
