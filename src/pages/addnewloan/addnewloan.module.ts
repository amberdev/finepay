import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnewloanPage } from './addnewloan';

@NgModule({
  declarations: [
    AddnewloanPage,
  ],
  imports: [
    IonicPageModule.forChild(AddnewloanPage),
  ],
  exports: [
    AddnewloanPage
  ]
})
export class AddnewloanPageModule {}
