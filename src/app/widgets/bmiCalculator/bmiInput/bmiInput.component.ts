import { Component, EventEmitter, Output } from "@angular/core";
import { BmiInputModel } from "../../models/bmiInput.model";

@Component({
  selector: 'bmi-input',
  templateUrl: './bmiInput.component.html',
  styleUrls: ['bmiInput.component.css']
})
export class BmiInputComponent {
  height = 0;
  weight = 0;
  @Output() public valueChanged = new EventEmitter<BmiInputModel>();
  @Output() clearEvent = new EventEmitter();

  onHeightChange(height: string): void {
    this.height = +height;
  }

  onWeightChange(weight: string): void {
    this.weight = +weight;
  }

  emitValue() {
    this.valueChanged.emit(new BmiInputModel(this.height, this.weight));
  }

  clear() {
    this.height = 0;
    this.weight = 0;
    this.clearEvent.emit();
  }
}
