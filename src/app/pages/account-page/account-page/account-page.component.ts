import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  profile: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let x = this.userService.isUserAssesor() ? 'Assesor' : 'Requestor';
    this.profile = x + ' ' + this.userService.getUserType();
  }

}
