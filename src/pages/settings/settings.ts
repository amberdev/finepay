import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
radio_type: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.radio_type = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  radio_tab(radio_type) {
   this.radio_type = radio_type;
  }

  goBack(){
  this.navCtrl.pop();
}

}
