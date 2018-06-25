import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DenyPage} from './deny';

@NgModule({
  declarations: [
    DenyPage,
  ],
  imports: [
    IonicPageModule.forChild(DenyPage),
  ],
  exports: [
    DenyPage
  ]
})
export class DenyPageModule {}
