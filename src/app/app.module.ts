import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalenderComponent } from './components/calender/calender.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { EventsComponent } from './components/events/events.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupLeadersComponent } from './components/group-leaders/group-leaders.component';
import { TeamLeadersComponent } from './components/team-leaders/team-leaders.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    CalenderComponent,
    AnalyticsComponent,
    EventsComponent,
    DashboardComponent,
    GroupLeadersComponent,
    TeamLeadersComponent,
    ReportsComponent,
    NotificationComponent,
    SettingsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
