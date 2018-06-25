import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settlepopup',
  templateUrl: 'settlepopup.html',
})
export class SettlepopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettlepopupPage');
  }

  dismiss() {
this.viewCtrl.dismiss();
}

}
