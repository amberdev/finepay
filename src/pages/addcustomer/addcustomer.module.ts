import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddcustomerPage } from './addcustomer';

@NgModule({
  declarations: [
    AddcustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddcustomerPage),
  ],
})
export class AddcustomerPageModule {}
