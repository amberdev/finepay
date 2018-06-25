import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddcustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcustomer',
  templateUrl: 'addcustomer.html',
})
export class AddcustomerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,private alertCtrl: AlertController,public toastCtrl: ToastController,public storage: Storage) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcustomerPage');
  }

  goBack(){
  this.navCtrl.push('HomePage');
}

addcustomersAPI()
{ 
       
      if(typeof this.cust_username=='undefined' || this.cust_username=='' || typeof this.cust_firstName=='undefined' || this.cust_firstName=='' || typeof this.cust_lastName=='undefined' || this.cust_lastName=='')
      {

        this.presentAlert('Please enter all data');
      }
      else
      {
          
          this.storage.get('finicity_token').then((val) => {
         
           if(val!='')
           {
               
              let body = JSON.stringify({
              username: this.cust_username,
              method: 'addCustomer',
              firstname: this.cust_firstName,
              lastname: this.cust_lastName,
              finicity_token:val, }); 

               return new Promise(resolve => {
                this.httpClient.post('http://localhost:8888/finicity.php',body).subscribe(data => {
                  
                  if(data.status=='ok')
                  { 
                     
                    this.presentToast('Log-in successfully');
                    console.log(this.storage.get('user_details'));
                    // this.navCtrl.push('HomePage');
                    this.presentAlert(data.msg);
                  }
                  else
                  {
                    // this.toast.presentToast('Username/Password is incorrect!');
                    // this.presentToast('Username/Password is incorrect!');
                    this.presentAlert(data.msg);
                  }
                resolve(data);
                }, err => {
                // console.log(err);
                });
                });
               
           }
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

customerList(){

  this.navCtrl.push('CustomerlistPage');
}

}
