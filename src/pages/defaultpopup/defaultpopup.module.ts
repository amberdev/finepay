import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefaultpopupPage } from './defaultpopup';

@NgModule({
  declarations: [
    DefaultpopupPage,
  ],
  imports: [
    IonicPageModule.forChild(DefaultpopupPage),
  ],
  exports: [
    DefaultpopupPage
  ]
})
export class DefaultpopupPageModule {}
