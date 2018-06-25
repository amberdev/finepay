import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-selectuser',
  templateUrl: 'selectuser.html',
})
export class SelectuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectuserPage');
  }

  dismiss() {
this.viewCtrl.dismiss();
}

}
