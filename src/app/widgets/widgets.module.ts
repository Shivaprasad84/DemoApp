import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BMICalculator } from './bmiCalculator/bmiCalculator.component';
import { BmiInputComponent } from './bmiCalculator/bmiInput/bmiInput.component';
import { BmiResultComponent } from './bmiCalculator/bmiResult/bmiResult.component';
import { HeadingComponent } from './heading/heading.component';


@NgModule({
  declarations: [
    HeadingComponent,
    BMICalculator,
    BmiInputComponent,
    BmiResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [HeadingComponent, BMICalculator],
  providers: []
})
export class WidgetsModule { }
