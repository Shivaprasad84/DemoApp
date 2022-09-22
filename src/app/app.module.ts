import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRootComponent } from './appRoot.component';
import { BmiCalculatorService } from './services/bmiCalculator.service';
import { FileLoggerService } from './services/fileLogger.service';
// import { LoggerService } from './services/loggerService.service';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    WidgetsModule
  ],
  exports: [],
  providers: [
    { provide: BmiCalculatorService, useClass: BmiCalculatorService },
    { provide: 'logger', useClass: FileLoggerService }
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
