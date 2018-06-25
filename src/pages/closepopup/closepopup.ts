import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-closepopup',
  templateUrl: 'closepopup.html',
})
export class ClosepopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClosepopupPage');
  }

  dismiss() {
this.viewCtrl.dismiss();
}

}
