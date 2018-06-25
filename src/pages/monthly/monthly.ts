import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-monthly',
  templateUrl: 'monthly.html',
})
export class MonthlyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonthlyPage');
  }


  goBack(){
  this.navCtrl.pop();
}

}
