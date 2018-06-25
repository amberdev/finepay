import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {TrackermapPage } from './trackermap';

@NgModule({
  declarations: [
    TrackermapPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackermapPage),
  ],
  exports: [
    TrackermapPage
  ]
})
export class TrackermapPageModule {}
