import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-score-result',
  templateUrl: './score-result.component.html',
  styleUrls: ['./score-result.component.scss']
})
export class ScoreResultComponent implements OnInit, OnChanges {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() score: number = 0;
  @Input() textColor: string = '';
  @Input()
  @HostBinding('style.background')
  backgroundColor: string = '';

  ngOnInit() {
    this.logInputs();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.logInputs();
  }

  private logInputs() {
    console.log('Icon:', this.icon);
    console.log('Text:', this.text);
    console.log('Score:', this.score);
    console.log('Text color:', this.textColor);
    console.log('Background color:', this.backgroundColor);
  }
}
