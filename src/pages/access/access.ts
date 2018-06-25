import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-access',
  templateUrl: 'access.html',
})
export class AccessPage {
  radio_type: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.radio_type = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessPage');
  }

  goBack(){
  this.navCtrl.pop();
}

radio_tab(radio_type) {
 this.radio_type = radio_type;
}

public event = {
     month: '2016-11-01',
     timeStarts: '07:43',
     timeEnds: '2050-02-20'
   }

}
