import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewlinePage } from './newline';

@NgModule({
  declarations: [
    NewlinePage,
  ],
  imports: [
    IonicPageModule.forChild(NewlinePage),
  ],
  exports: [
    NewlinePage
  ]
})
export class NewlinePageModule {}
