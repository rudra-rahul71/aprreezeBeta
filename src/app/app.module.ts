import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule, routingComponents } from './app-routing.module';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
