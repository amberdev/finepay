import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transferpopup',
  templateUrl: 'transferpopup.html',
})
export class TransferpopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferpopupPage');
  }

  dismiss() {
this.viewCtrl.dismiss();
}

}
