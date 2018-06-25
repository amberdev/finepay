import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-weekly',
  templateUrl: 'weekly.html',
})
export class WeeklyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklyPage');
  }

  goBack(){
  this.navCtrl.pop();
}

}
