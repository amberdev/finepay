import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ModalController,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  notificationfilter() {
       let modal = this.modalCtrl.create('NotificationfilterPage');
       modal.present();
     }

     dismiss()
   {
    this.viewCtrl.dismiss();
   }

}
