import { BmiInputModel } from "../widgets/models/bmiInput.model";
export class BmiCalculatorService {
  getBmi(bmiInput: BmiInputModel): number {
    if (bmiInput.height === 0) {
      return 0;
    }
    const heightMeters = this.cmTom(bmiInput.height);
    const bmi = +(bmiInput.weight / (heightMeters * heightMeters)).toFixed(3);
    return bmi;
  }

  private cmTom(cm: number): number {
    return cm / 100;
  }
}
