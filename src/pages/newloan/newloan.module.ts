import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewloanPage } from './newloan';

@NgModule({
  declarations: [
    NewloanPage,
  ],
  imports: [
    IonicPageModule.forChild(NewloanPage),
  ],
  exports: [
    NewloanPage
  ]
})
export class NewloanPageModule {}
