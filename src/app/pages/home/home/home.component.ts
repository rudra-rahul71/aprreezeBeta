import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  logoPath = 'assets/home-preview.png';
  checks = ['High Quality Reports', 'Fast Turnaround',
    'Interior and Exterior Pictures - with recorded video',
    'Easy Scheduling and Payment', 'GPS Verified'];

  destroyed = new Subject<void>();
  currentScreenSize!: String;

  displayNameMap = new Map([
    //phone
    [Breakpoints.XSmall, 'XSmall'],
    //ipad
    [Breakpoints.Small, 'Small'],
    //desktop
    [Breakpoints.Medium, 'Medium']
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
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

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  isTablet() {
    return this.currentScreenSize === 'Small' || this.currentScreenSize === 'XSmall';
  }
}
