import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferpopupPage } from './transferpopup';

@NgModule({
  declarations: [
    TransferpopupPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferpopupPage),
  ],
  exports: [
    TransferpopupPage
  ]
})
export class TransferpopupPageModule {}
