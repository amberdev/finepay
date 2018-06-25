import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html',
})
export class DailyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyPage');
  }

  goBack(){
  this.navCtrl.pop();
}

}
