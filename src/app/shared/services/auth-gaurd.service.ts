import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { AuthGuard, AuthService } from '@auth0/auth0-angular';
import { filter, map, mergeMap, pipe } from 'rxjs';
import { Constants } from '../models/constants';
import { UserResolverService } from './user-resolver.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService extends AuthGuard implements CanActivate {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, auth: AuthService,
    private titleService: Title, private userResolverService: UserResolverService, private userService: UserService) {
      super(auth);
    }

  override canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const restrictedRoles = next.data['roles'] as string[];
    return super.canActivate(next, state).pipe(
      mergeMap(() => this.userResolverService.resolve().pipe(
        map(() => this.isAuthorized(next, restrictedRoles))
      ))
    );
  }

  private isAuthorized(next: ActivatedRouteSnapshot, restrictedRoles?: string[]): boolean {
    let hasRequiredRole = false;
    this.userService.getUserObservable().subscribe(user => {
      for (const role of Constants.applicationRoles) {
        if (user.roles && user.roles.indexOf(role) != 1) {
          hasRequiredRole = true;
          break;
        }
      }

      if (restrictedRoles && restrictedRoles.length > 0) {
        restrictedRoles.forEach(role => {
          if (user.roles && user.roles.indexOf(role) !== -1) {
            this.router.navigate(['home']);
          }
        });
      }
    });

    if((Constants.requestorPages.indexOf(next.data['title']) !== -1 && !this.userService.isUserRequestor())
      || (Constants.assesorPages.indexOf(next.data['title']) !== -1 && !this.userService.isUserAssesor())) {
        hasRequiredRole = false;
    }
    
    if(!hasRequiredRole) {
      this.router.navigate(['logout']);
    }

    this.setPageTitle();
    return hasRequiredRole;
  }

  private setPageTitle(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).pipe(
        map(() => this.activatedRoute)).pipe(
          map((route) => {
            while (route.firstChild) {
              route = route.firstChild;
            }
            return route;
          })).pipe(
      mergeMap((route) => route.data)).subscribe((event) => {
        const pageTitle = event['title'];
        this.titleService.setTitle(pageTitle + ' | Appreeze Portal');
        let element = document.querySelector<HTMLElement>('.page-title');

        if(element) {
          element = pageTitle;
        }
      });
  }
}

