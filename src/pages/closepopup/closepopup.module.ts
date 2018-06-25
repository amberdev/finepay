import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClosepopupPage } from './closepopup';

@NgModule({
  declarations: [
    ClosepopupPage,
  ],
  imports: [
    IonicPageModule.forChild(ClosepopupPage),
  ],
  exports: [
    ClosepopupPage
  ]
})
export class ClosepopupPageModule {}
