import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'bmi-input',
  templateUrl: './bmiInput.component.html'
})
export class BmiInputComponent {
  @Output() public valueChanged = new EventEmitter();
  @Input() value = 0;

  emitValue(value: string) {
    this.valueChanged.emit(value);
  }
}
