import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewloanpopoverPage } from './newloanpopover';

@NgModule({
  declarations: [
    NewloanpopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(NewloanpopoverPage),
  ],
  exports: [
    NewloanpopoverPage
  ]
})
export class NewloanpopoverPageModule {}
