import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { AccountService } from './account.service';



@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountPageComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountPageModule { }
