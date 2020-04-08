import {Injectable, Provider} from '@angular/core';

// do whatever you want for logging here, add methods for log levels etc.
@Injectable()
export class LogService {
  log(msg: any) {
    console.log(new Date() + ": "
      + JSON.stringify(msg));
  }
}