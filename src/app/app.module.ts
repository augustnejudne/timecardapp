import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { ActionComponent } from './components/action/action.component';
import { WorklogComponent } from './components/worklog/worklog.component';

import { WorklogService } from './services/worklog.service';
import { ClockService } from './services/clock.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ActionComponent,
    WorklogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ClockService,
    WorklogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
