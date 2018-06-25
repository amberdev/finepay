import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyloanPage } from './myloan';

@NgModule({
  declarations: [
    MyloanPage,
  ],
  imports: [
    IonicPageModule.forChild(MyloanPage),
  ],
  exports: [
    MyloanPage
  ]
})
export class MyloanPageModule {}
