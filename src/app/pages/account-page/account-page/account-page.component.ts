import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  profile: any;

  constructor(private userService: UserService, private accountService: AccountService) { }

  ngOnInit(): void {
    let x = this.userService.isUserAssesor() ? 'Assesor' : 'Requestor';
    this.profile = x + ' ' + this.userService.getUserType();

    this.accountService.getSomething().subscribe(response => {
      console.log(response);
    });
  }

}
