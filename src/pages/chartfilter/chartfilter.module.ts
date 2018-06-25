import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ChartfilterPage } from './chartfilter';

@NgModule({
  declarations: [
    ChartfilterPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartfilterPage),
  ],
  exports: [
    ChartfilterPage
  ]
})
export class ChartfilterPageModule {}
