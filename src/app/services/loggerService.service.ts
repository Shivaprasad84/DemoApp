import { ILoggerService } from "./logger.contract";
export class LoggerService implements ILoggerService {
  write(message: string): void {
    console.log("Console:", message);
  }
}
