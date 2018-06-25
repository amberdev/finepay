import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,private alertCtrl: AlertController,public toastCtrl: ToastController,public storage: Storage) {

      // this.username='';
      // this.password='';

      storage.get('finicity_token').then((val) => {
           
         if(val)
         {
            // console.log(val);
             this.navCtrl.push('HomePage');
         }
       });
 

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  home(){

      let body = JSON.stringify({
      username: this.username,
      method: 'login',
      password: this.password }); 
      // console.log(this.httpClient);
      // console.log(this.httpClient.get('http://localhost:8888/finicity.php'));
      // console.log(this.http.post('http://localhost:8888/finicity.php',body));
      // console.log(body);
      // console.log(this.username);
      if(this.username=='' || this.password=='' || typeof this.username=='undefined' || typeof this.password=='undefined')
      {

        this.presentAlert('Username - Password is required');
      }
      else
      {
           return new Promise(resolve => {
        this.httpClient.post('http://localhost:8888/finicity.php',body).subscribe(data => {
          
          if(data.status=='success')
          { 
            this.storage.set('user_details', data.data);
            this.storage.set('finicity_token', data.finicity_token);
            this.presentToast('Log-in successfully');
            console.log(this.storage.get('user_details'));
            this.navCtrl.push('HomePage');
          }
          else
          {
            // this.toast.presentToast('Username/Password is incorrect!');
            // this.presentToast('Username/Password is incorrect!');
            this.presentAlert('Username/Password is incorrect');
          }
        resolve(data);
        }, err => {
        // console.log(err);
        });
        });
      }
  }

  presentAlert(msg) {
  let alert = this.alertCtrl.create({
    title: 'Alert',
    subTitle: msg,
    buttons: ['Dismiss']
  });
  alert.present();
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'top'
  });
}

  register(){
     this.navCtrl.push('SignupPage');
  }

  forgot(){
     this.navCtrl.push('ForgotPage');
  }



}
