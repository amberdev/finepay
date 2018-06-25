import { Component } from '@angular/core';
import { IonicPage,NavController,ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-deny',
  templateUrl: 'deny.html',
})
export class DenyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenyPage');
  }

    dismiss()
  {
   this.viewCtrl.dismiss();
  }
}
