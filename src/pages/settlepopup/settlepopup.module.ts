import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettlepopupPage } from './settlepopup';

@NgModule({
  declarations: [
    SettlepopupPage,
  ],
  imports: [
    IonicPageModule.forChild(SettlepopupPage),
  ],
  exports: [
    SettlepopupPage
  ]
})
export class SettlepopupPageModule {}
