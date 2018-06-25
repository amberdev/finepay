import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addbusiness',
  templateUrl: 'addbusiness.html',
})
export class AddbusinessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbusinessPage');
  }

  goBack(){
  this.navCtrl.pop();
}

public event = {
     month: '2016-11-01',
     timeStarts: '07:43',
     timeEnds: '2050-02-20'
   }


}
