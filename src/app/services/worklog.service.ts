import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WorklogService {
  workLogData = [
    {
      Date: new Date(2017, 11, 16),
      TimeIn: new Date(2017, 11, 16, 8, 32, 23),
      TimeOut: new Date(2017, 11, 16, 17, 4, 33)
    },
    {
      Date: new Date(2017, 11, 15),
      TimeIn: new Date(2017, 11, 15, 8, 31, 15),
      TimeOut: new Date(2017, 11, 15, 17, 1, 28)
    }
  ];

  // Date
  private DateSrc = new BehaviorSubject<any>('');
  Date = this.DateSrc.asObservable();

  // TimeIn
  private TimeInSrc = new BehaviorSubject<any>('');
  TimeIn = this.TimeInSrc.asObservable();

  // TimeOut 
  private TimeOutSrc = new BehaviorSubject<any>('');
  TimeOut = this.TimeOutSrc.asObservable();

  constructor() { }

  logDate( date: Date ) {
    this.DateSrc.next(date);
  }

  logTimeIn( timeIn: Date ) {
    this.TimeInSrc.next(timeIn);
  }

  logTimeOut( timeOut: Date ) {
    this.TimeOutSrc.next(timeOut);
    // this.workLogData.push({
    // });
  }

}
