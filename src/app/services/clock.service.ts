import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClockService {
  private clock: Observable<Date>;
  public timeIn: Date;

  constructor() {
    this.clock = Observable.interval(1000).map(tick => new Date()).share();
  }

  getClock(): Observable<Date> {
    return this.clock;
  }

  setTimeIn() {
    this.timeIn = new Date();
  }

}
