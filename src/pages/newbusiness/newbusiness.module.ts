import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewbusinessPage } from './newbusiness';

@NgModule({
  declarations: [
    NewbusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(NewbusinessPage),
  ],
  exports: [
    NewbusinessPage
  ]
})
export class NewbusinessPageModule {}
