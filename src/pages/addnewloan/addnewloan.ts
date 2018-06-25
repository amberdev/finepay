import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-addnewloan',
  templateUrl: 'addnewloan.html',
})
export class AddnewloanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewloanPage');
  }

}
