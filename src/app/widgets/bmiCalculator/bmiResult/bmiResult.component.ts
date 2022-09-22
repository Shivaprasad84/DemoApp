import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'bmi-result',
  templateUrl: './bmiResult.component.html',
  styleUrls: ['bmiResult.component.css']
})
export class BmiResultComponent {
  @Input() height = 0;
  @Input() weight = 0;
  @Output() clearEvent = new EventEmitter();

  bmi = 0;

  calculateBmi() {
    if (this.height === 0) {
      return;
    }
    this.bmi = +(this.weight / (this.height * this.height)).toFixed(3);
  }

  clear() {
    this.bmi = 0;
    this.clearEvent.emit();
  }
}
