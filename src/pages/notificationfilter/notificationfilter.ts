import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notificationfilter',
  templateUrl: 'notificationfilter.html',
})
export class NotificationfilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationfilterPage');
  }
  dismiss()
{
 this.viewCtrl.dismiss();
}

}
