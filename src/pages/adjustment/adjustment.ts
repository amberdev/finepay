import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-adjustment',
  templateUrl: 'adjustment.html',
})
export class AdjustmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdjustmentPage');
  }

  goBack(){
  this.navCtrl.pop();
}

}
