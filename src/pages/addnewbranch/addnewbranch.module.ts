import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnewbranchPage } from './addnewbranch';

@NgModule({
  declarations: [
    AddnewbranchPage,
  ],
  imports: [
    IonicPageModule.forChild(AddnewbranchPage),
  ],
  exports: [
    AddnewbranchPage
  ]
})
export class AddnewbranchPageModule {}
