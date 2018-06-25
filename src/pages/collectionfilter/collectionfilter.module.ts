import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionfilterPage } from './collectionfilter';

@NgModule({
  declarations: [
    CollectionfilterPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionfilterPage),
  ],
  exports: [
    CollectionfilterPage
  ]
})
export class CollectionfilterPageModule {}
