import { ILoggerService } from "./logger.contract";

export class FileLoggerService implements ILoggerService {
  write(message: string): void {
    console.log("File:", message);
  }
}
