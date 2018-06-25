import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoldPage } from './gold';

@NgModule({
  declarations: [
    GoldPage,
  ],
  imports: [
    IonicPageModule.forChild(GoldPage),
  ],
  exports: [
    GoldPage
  ]
})
export class GoldPageModule {}
