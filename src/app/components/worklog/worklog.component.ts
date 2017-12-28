import { WorklogService } from './../../services/worklog.service';
import { ClockService } from './../../services/clock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {
  worklogData;
  date: Date;
  timeIn: Date;
  timeOut: Date;

  constructor(private _worklogService: WorklogService) {
    this.worklogData = this._worklogService.workLogData;
  }

  ngOnInit() {
    this._worklogService.Date.subscribe(date => this.date = date);
    this._worklogService.TimeIn.subscribe(timeIn => this.timeIn = timeIn);
    this._worklogService.TimeOut.subscribe(timeOut => this.timeOut = timeOut);
  }

}
