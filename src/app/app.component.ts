import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'results-summary-component-main';

  public scoreResults = [
    {
      icon: 'assets/images/icon-reaction.svg',
      text: 'Reaction',
      score: 80,
      textColor: '#c18082',
      backgroundColor: '#ffeeef'
    },
    {
      icon: 'assets/images/icon-memory.svg',
      text: 'Memory',
      score: 92,
      textColor: '#ffe78f',
      backgroundColor: '#fffbf2',
    },
    {
      icon: 'assets/images/icon-verbal.svg',
      text: 'Verbal',
      score: 61,
      textColor: '#569d8f',
      backgroundColor: '#d2f7f0',
    },
    {
      icon: 'assets/images/icon-visual.svg',
      text: 'Visual',
      score: 72,
      textColor: '#454886',
      backgroundColor: '#dbdbe3',
    },
  ];
}
