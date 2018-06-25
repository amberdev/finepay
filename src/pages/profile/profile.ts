import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    storage.get('user_details').then((val) => {
       this.username=val.username;
       this.firstname=val.username;
       this.email=val.email;
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goBack(){
  this.navCtrl.pop();
}

  public event = {
       month: '2016-11-01',
       placeholder:'Date of Birth',
       timeStarts: '07:43',
       timeEnds: '2050-02-20'
     }

}
