import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();
  currentScreenSize!: String;
  logoPath = 'assets/logo.png';
  profileJson!: string;

  displayNameMap = new Map([
    //phone
    [Breakpoints.XSmall, 'XSmall'],
    //ipad
    [Breakpoints.Small, 'Small'],
    //desktop
    [Breakpoints.Medium, 'Medium']
  ]);

  constructor(public auth: AuthService, private router: Router, breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }
  
  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    )
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  loginWithRedirect(): void {
    this.auth.getUser()
    this.auth.loginWithRedirect();
    this.router.navigate(['/dashboard']);
  }

  isPhone() {
    return this.currentScreenSize === 'XSmall'
  }
}
