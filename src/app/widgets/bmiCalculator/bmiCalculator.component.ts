import { Component } from "@angular/core";
import { BmiInputModel } from "../models/bmiInput.model";

@Component({
  selector: 'bmi-calculator',
  templateUrl: './bmiCalculator.component.html'
})
export class BMICalculator {
  public bmi = 0;

  calculateBmi(bmiInput: BmiInputModel) {
    if (bmiInput.height === 0) {
      return;
    }
    const heightMeters = this.cmTom(bmiInput.height);
    this.bmi = +(bmiInput.weight / (heightMeters * heightMeters)).toFixed(3);
  }

  clear() {
    this.bmi = 0;
  }

  private cmTom(cm: number): number {
    return cm / 100;
  }
}
