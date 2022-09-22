import { Component, Inject } from '@angular/core';
import { ILoggerService } from './services/logger.contract';

@Component({
  selector: 'app-root',
  templateUrl: './appRoot.component.html',
  styleUrls: ['appRoot.component.css']
})
export class AppRootComponent {
  constructor(@Inject('logger') loggerService: ILoggerService) {
    loggerService.write('Application started...');
  }
}
