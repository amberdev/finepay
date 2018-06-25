import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewbranchPage } from './newbranch';

@NgModule({
  declarations: [
    NewbranchPage,
  ],
  imports: [
    IonicPageModule.forChild(NewbranchPage),
  ],
  exports: [
    NewbranchPage
  ]
})
export class NewbranchPageModule {}
