import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarksalaryPage } from './marksalary';

@NgModule({
  declarations: [
    MarksalaryPage,
  ],
  imports: [
    IonicPageModule.forChild(MarksalaryPage),
  ],
  exports: [
    MarksalaryPage
  ]
})
export class MarksalaryPageModule {}
