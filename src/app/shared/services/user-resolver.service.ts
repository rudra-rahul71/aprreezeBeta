import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/interfaces';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService {

  constructor(private userService: UserService) { }

  resolve(): Observable<User> {
    if (Object.keys(this.userService.user.value).length !== 0) {
      return of(this.userService.user.value);
    }
    return this.userService.loadCurrentUser();
  }
}
