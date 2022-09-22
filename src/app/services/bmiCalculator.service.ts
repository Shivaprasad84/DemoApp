import { Inject, Injectable } from "@angular/core";
import { BmiInputModel } from "../widgets/models/bmiInput.model";
import { ILoggerService } from "./logger.contract";

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {
  constructor(@Inject('logger') private logger: ILoggerService) {}

  getBmi(bmiInput: BmiInputModel): number {
    this.logger.write('getBmi called...');
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
