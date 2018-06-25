import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyPage } from './daily';

@NgModule({
  declarations: [
    DailyPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyPage),
  ],
  exports: [
    DailyPage
  ]
})
export class DailyPageModule {}
