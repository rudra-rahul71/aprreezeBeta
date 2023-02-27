import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './core/navbar/navbar.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { CalendarPageModule } from './pages/calendar-page/calendar-page.module';
import { RequestPageModule } from './pages/request-page/request-page.module';
import { WalletPageModule } from './pages/wallet-page/wallet-page.module';
import { LogoutModule } from './core/logout/logout.module';
import { HomeModule } from './pages/home/home.module';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';
import { UserService } from './shared/services/user.service';
import { UserResolverService } from './shared/services/user-resolver.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    BrowserAnimationsModule,
    NavbarModule,
    DashboardModule,
    CalendarPageModule,
    RequestPageModule,
    WalletPageModule,
    LogoutModule,
    HomeModule
  ],
  providers: [
    AuthGaurdService,
    UserResolverService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
