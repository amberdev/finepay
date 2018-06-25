import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newbusiness',
  templateUrl: 'newbusiness.html',
})
export class NewbusinessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewbusinessPage');
  }

  goBack(){
  this.navCtrl.pop();
}

addbusiness(){
   this.navCtrl.push('AddbusinessPage');
}

}
