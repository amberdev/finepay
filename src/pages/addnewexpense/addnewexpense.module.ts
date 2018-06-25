import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnewexpensePage } from './addnewexpense';

@NgModule({
  declarations: [
    AddnewexpensePage,
  ],
  imports: [
    IonicPageModule.forChild(AddnewexpensePage),
  ],
  exports: [
    AddnewexpensePage
  ]
})
export class AddnewexpensePageModule {}
