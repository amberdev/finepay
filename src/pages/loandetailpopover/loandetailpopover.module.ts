import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoandetailpopoverPage } from './loandetailpopover';

@NgModule({
  declarations: [
    LoandetailpopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(LoandetailpopoverPage),
  ],
  exports: [
    LoandetailpopoverPage
  ]
})
export class LoandetailpopoverPageModule {}
