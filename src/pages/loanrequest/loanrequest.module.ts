import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanrequestPage } from './loanrequest';

@NgModule({
  declarations: [
    LoanrequestPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanrequestPage),
  ],
  exports: [
    LoanrequestPage
  ]
})
export class LoanrequestPageModule {}
