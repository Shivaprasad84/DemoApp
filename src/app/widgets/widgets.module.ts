import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BMICalculator } from './bmiCalculator/bmiCalculator.component';
import { HeadingComponent } from './heading/heading.component';


@NgModule({
  declarations: [
    HeadingComponent,
    BMICalculator
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [HeadingComponent, BMICalculator],
  providers: []
})
export class WidgetsModule { }
