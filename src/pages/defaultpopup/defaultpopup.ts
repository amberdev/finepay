import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-defaultpopup',
  templateUrl: 'defaultpopup.html',
})
export class DefaultpopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefaultpopupPage');
  }

  dismiss()
  {
   this.viewCtrl.dismiss();
  }

}
