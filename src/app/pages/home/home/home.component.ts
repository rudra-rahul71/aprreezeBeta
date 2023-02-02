// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  constructor() {}

  ngOnDestroy(): void {
  }
}
