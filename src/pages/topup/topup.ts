import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html',
})
export class TopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
  this.navCtrl.pop();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupPage');
  }

}
