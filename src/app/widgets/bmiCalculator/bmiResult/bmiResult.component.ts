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
    const heightMeters = this.cmTom(this.height);
    this.bmi = +(this.weight / (heightMeters * heightMeters)).toFixed(3);
  }

  clear() {
    this.bmi = 0;
    this.clearEvent.emit();
  }

  private cmTom(cm: number): number {
    return cm / 100;
  }
}
