import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { Constants } from '../models/constants';
import { UserType } from '../models/enums';
import { User } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User> = new BehaviorSubject({});

  constructor(private auth: AuthService) { }

  loadCurrentUser(): Observable<any> {
    return this.auth.user$.pipe(
      map(userDetail => userDetail ? userDetail : null),
      distinctUntilChanged(),
      switchMap(userDetail => {
        let user!: User;
        const userInfo = userDetail ? userDetail['https://my-app.example.com/roles'] : null;
        if(userDetail) {
          user = {
            userId: userDetail.sub, 
            name: userDetail.name,
            email: userDetail.email,
            roles: userInfo
          };
        }
        this.user.next(user);
        return of(user);
      }),
    );
  }

  getUserObservable() {
    return this.user.asObservable();
  }

  getUserType(): UserType {
    let userType = UserType.Unknown;
    this.getUserObservable().subscribe(user => {
      if (user) {
        if (user.roles?.indexOf(Constants.roleAppraiser) !== -1) {
          userType = UserType.Appraiser;
        } else if (user.roles?.indexOf(Constants.roleRealEstate) !== -1) {
          userType = UserType.RealEstate;
        } else if (user.roles?.indexOf(Constants.roleAttorney) !== -1) {
          userType = UserType.Attorney;
        } else if (user.roles?.indexOf(Constants.roleHomeowner) !== -1) {
          userType = UserType.Homeowner;
        } else if (user.roles?.indexOf(Constants.roleLender) !== -1) {
          userType = UserType.Lender;
        } else if (user.roles?.indexOf(Constants.roleLoanServicer) !== -1) {
          userType = UserType.LoanServicer;
        } else if (user.roles?.indexOf(Constants.roleRealtor) !== -1) {
          userType = UserType.Realtor;
        }
      }
    });

    return userType;
  }

  isUserAssesor(): boolean {
    return Constants.assesorRoles.indexOf(this.getUserType()) !== -1;
  }

  isUserRequestor(): boolean {
    return Constants.requestorRoles.indexOf(this.getUserType()) !== -1;
  }
}
