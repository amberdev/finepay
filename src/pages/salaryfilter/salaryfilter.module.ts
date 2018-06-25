import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SalaryfilterPage } from './salaryfilter';

@NgModule({
  declarations: [
    SalaryfilterPage,
  ],
  imports: [
    IonicPageModule.forChild(SalaryfilterPage),
  ],
  exports: [
    SalaryfilterPage
  ]
})
export class SalaryfilterPageModule {}
