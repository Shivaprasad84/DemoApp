import { Component } from "@angular/core";
import { BmiCalculatorService } from "../../services/bmiCalculator.service";
import { BmiInputModel } from "../models/bmiInput.model";

@Component({
  selector: 'bmi-calculator',
  templateUrl: './bmiCalculator.component.html',
  styleUrls: ['bmiCalculator.component.css']
})
export class BMICalculator {
  public bmi = 0;

  constructor(private bmiCalculatorService: BmiCalculatorService) {}

  calculateBmi(bmiInput: BmiInputModel) {
    this.bmi = this.bmiCalculatorService.getBmi(bmiInput);
  }

  clear() {
    this.bmi = 0;
  }
}
