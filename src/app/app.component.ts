import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
// import { AddcustomerPage } from '../pages/addcustomer/addcustomer';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public modalCtrl: ModalController,public storage: Storage) {
    this.initializeApp();

    storage.get('user_details').then((val) => {
      console.log('app componenet');
        if(val)
        {
           this.username=val.username;
           this.email=val.email;
           this.profile_pic=val.profile_pic;
        } 
     });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

notification() {
     let modal = this.modalCtrl.create('NotificationPage');
     modal.present();
   }

home() {
    this.nav.setRoot('HomePage');
}
myprofile() {
 this.nav.setRoot('ProfilePage');
}
logout() {
// this.nav.setRoot('LoginPage');
  this.storage.clear();
  this.storage.clear();
  this.nav.setRoot('LoginPage');
}
newloan() {
this.nav.setRoot('NewloanPage');
}
myloan() {
this.nav.setRoot('MyloanPage');
}
settings() {
this.nav.setRoot('SettingsPage');
}
report() {
this.nav.setRoot('ReportPage');
}
}
