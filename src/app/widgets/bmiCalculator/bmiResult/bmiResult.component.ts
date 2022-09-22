import { Component, Input } from "@angular/core";

@Component({
  selector: 'bmi-result',
  templateUrl: './bmiResult.component.html',
  styleUrls: ['bmiResult.component.css']
})
export class BmiResultComponent {
  @Input() bmi = 0;
}
