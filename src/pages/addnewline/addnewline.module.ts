import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnewlinePage } from './addnewline';

@NgModule({
  declarations: [
    AddnewlinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddnewlinePage),
  ],
  exports: [
    AddnewlinePage
  ]
})
export class AddnewlinePageModule {}
