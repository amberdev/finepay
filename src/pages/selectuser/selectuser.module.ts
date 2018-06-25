import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectuserPage } from './selectuser';

@NgModule({
  declarations: [
    SelectuserPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectuserPage),
  ],
  exports: [
    SelectuserPage
  ]
})
export class SelectuserPageModule {}
