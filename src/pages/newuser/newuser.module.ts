import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewuserPage } from './newuser';

@NgModule({
  declarations: [
    NewuserPage,
  ],
  imports: [
    IonicPageModule.forChild(NewuserPage),
  ],
  exports: [
    NewuserPage
  ]
})
export class NewuserPageModule {}
