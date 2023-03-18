import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Subject, takeUntil } from 'rxjs';
import { Constants } from 'src/app/shared/models/constants';
import { User } from 'src/app/shared/models/interfaces';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();
  currentScreenSize!: String;
  logoPath = 'assets/logo.png';

  labels!: any[];

  user!: User;

  displayNameMap = new Map([
    //phone
    [Breakpoints.XSmall, 'XSmall'],
    //ipad
    [Breakpoints.Small, 'Small'],
    //desktop
    [Breakpoints.Medium, 'Medium']
  ]);

  constructor(public auth: AuthService, private userService: UserService, private router: Router, breakpointObserver: BreakpointObserver) {
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
    this.userService.getUserObservable().subscribe(user => {
      if (user) {
        this.user = user;
        if(this.user.roles) {
          this.setLabels();
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  setLabels(): void {
    if(this.user.roles && Constants.assesorUserRoles.indexOf(this.user.roles[0]) != -1) {
      this.labels = Constants.assessorLabels;
    } else if (this.user.roles && Constants.requestorUserRoles.indexOf(this.user.roles[0]) != -1) {
      this.labels = Constants.requestorLabels;
    }
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
    this.router.navigate(['/dashboard']);
  }

  isPhone() {
    return this.currentScreenSize === 'XSmall'
  }
}
