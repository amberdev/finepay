import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoandetailPage } from './loandetail';

@NgModule({
  declarations: [
    LoandetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LoandetailPage),
  ],
  exports: [
    LoandetailPage
  ]
})
export class LoandetailPageModule {}
