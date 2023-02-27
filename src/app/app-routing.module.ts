import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LogoutComponent } from './core/logout/logout/logout.component';
import { AccountPageComponent } from './pages/account-page/account-page/account-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page/calendar-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home/home.component';
import { RequestPageComponent } from './pages/request-page/request-page/request-page.component';
import { WalletPageComponent } from './pages/wallet-page/wallet-page/wallet-page.component';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGaurdService],
    data: { title: 'Dashboard'}
  },
  { 
    path: 'calendar', 
    component: CalendarPageComponent,
    canActivate: [AuthGaurdService],
    data: { title: 'Calendar'}
  },
  { 
    path: 'request', 
    component: RequestPageComponent,
    canActivate: [AuthGaurdService],
    data: { title: 'Request'}
  },
  { 
    path: 'wallet', 
    component: WalletPageComponent,
    canActivate: [AuthGaurdService],
    data: { title: 'Wallet'}
  },
  { 
    path: 'account', 
    component: AccountPageComponent,
    canActivate: [AuthGaurdService],
    data: { title: 'Account'}
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'logout', 
    component: LogoutComponent
  },
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }