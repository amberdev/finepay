import { Component } from '@angular/core';
import {IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-gold',
  templateUrl: 'gold.html',
})
export class GoldPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoldPage');
  }

  goBack(){
  this.navCtrl.pop();
}

}
