import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { EventsComponent } from './components/events/events.component';
import { TeamLeadersComponent } from './components/team-leaders/team-leaders.component';
import { GroupLeadersComponent } from './components/group-leaders/group-leaders.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FinanceComponent } from './components/financial/finance.component';
import { CommunicationComponent } from './components/communication/communication.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'sign up', component: SignUpComponent},
  // {path:'navbar', component: NavbarComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'analytics', component:AnalyticsComponent},
  {path: 'events', component:EventsComponent},
  {path: 'group-leaders', component:GroupLeadersComponent},
  {path: 'team-leaders', component:TeamLeadersComponent},
  {path: 'reports', component:ReportsComponent},
  {path: 'notification', component:NotificationComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'logout', component:LogoutComponent},

  {path: 'finance', component:FinanceComponent},
  {path: 'communication', component:CommunicationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
