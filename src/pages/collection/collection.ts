import { Component } from '@angular/core';
import {IonicPage,NavController, NavParams,ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };

  collectionfilter() {
       let modal = this.modalCtrl.create('CollectionfilterPage');
       modal.present();
     }


}
