import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CustomerlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerlist',
  templateUrl: 'customerlist.html',
})
export class CustomerlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient,private alertCtrl: AlertController,private toastCtrl: ToastController,public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerlistPage');
    // this.presentAlert('Customer List shown here!!');
    


      this.storage.get('finicity_token').then((val) => {
           
       if(val)
       {   
          let body = JSON.stringify({
          finicity_token: val,
          method:'getCustomers'
          }); 

            return new Promise(resolve => {
            this.httpClient.post('http://localhost:8888/finicity.php',body).subscribe(data => {
              if(data.msg=='success')
              {
                // this.new_data=JSON.stringify(data);
                console.log(data.customer_data.customers);
                this.finaldata=data.customer_data.customers;
              }
              else
              {
                this.presentAlert('No data found');
              }
              
            resolve(data);
            }, err => {
             
            });
            });
       }
      
     }); 
    
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

loandetail(){
   this.navCtrl.push('LoandetailPage');
}

 presentAlert(msg) {
  let alert = this.alertCtrl.create({
    title: 'Alert',
    subTitle: msg,
    buttons: ['Dismiss']
  });
  alert.present();
}

request(){
   this.navCtrl.push('RequestformPage');
}

}
