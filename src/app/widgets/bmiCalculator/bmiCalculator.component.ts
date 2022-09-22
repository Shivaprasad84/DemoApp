import { Component } from "@angular/core";

@Component({
  selector: 'bmi-calculator',
  templateUrl: './bmiCalculator.component.html'
})
export class BMICalculator {
  public height = 0;
  public weight = 0;
  public bmi = 0;

  onHeightChange(height: string) {
    this.height = +height;
  }

  onWeightChange(weight: string) {
    this.weight = +weight;
  }

  calculateBmi() {
    this.bmi = +(this.weight / (this.height * this.height)).toFixed(3);
  }

  clear() {
    this.height = 0;
    this.weight = 0;
    this.bmi = 0;
  }
}
