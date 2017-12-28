import { Component, OnInit } from '@angular/core';
import { ClockService } from './../../services/clock.service';
import { WorklogService } from './../../services/worklog.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  loggedIn: boolean;
  actionText: string;
  currentTime: Date;

  constructor(private _clockService: ClockService, private _worklogService: WorklogService) {
    this.loggedIn = false;
    this.actionText = "Time In";
    this.currentTime = new Date();
  }

  ngOnInit() {
    this._clockService.getClock().subscribe(time => this.currentTime = time);
  }

  onClick() {
    if (this.loggedIn === false) {
      this._worklogService.logDate(new Date());
      this._worklogService.logTimeIn(new Date());

      this.actionText = 'Time Out'

      this.loggedIn = !this.loggedIn;
    } else {
      this._worklogService.logTimeOut(new Date());
      this.actionText = 'Time In'

      this.loggedIn = !this.loggedIn;
    }
  }

}
