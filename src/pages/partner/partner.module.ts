import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PartnerPage } from './partner';

@NgModule({
  declarations: [
    PartnerPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerPage),
  ],
  exports: [
    PartnerPage
  ]
})
export class PartnerPageModule {}
