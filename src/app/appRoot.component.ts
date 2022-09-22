import { Component, Inject } from '@angular/core';
import { ILoggerService } from './services/logger.contract';
import { LoggerService } from './services/loggerService.service';

@Component({
  selector: 'app-root',
  templateUrl: './appRoot.component.html'
})
export class AppRootComponent {
  constructor(@Inject('logger') loggerService: ILoggerService) {
    loggerService.write('Application started...');
  }
}
