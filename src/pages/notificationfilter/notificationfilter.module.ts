import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NotificationfilterPage } from './notificationfilter';

@NgModule({
  declarations: [
    NotificationfilterPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationfilterPage),
  ],
  exports: [
    NotificationfilterPage
  ]
})
export class NotificationfilterPageModule {}
