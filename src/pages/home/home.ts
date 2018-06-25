import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public httpClient: HttpClient,private alertCtrl: AlertController,private toastCtrl: ToastController,public storage: Storage) {
     
    console.log(this.storage.get('user_details'));

    storage.get('finicity_token').then((val) => {
           
         if(val)
         {   
         }
         else
         {
          this.navCtrl.push('LoginPage');
         }
       });
     
  }


  newbusiness(){
     this.navCtrl.push('NewbusinessPage');
  }

  newloan(){
     this.navCtrl.push('NewloanPage');
  }

  profile(){
     this.navCtrl.push('ProfilePage');
  }

  report(){
     this.navCtrl.push('ReportPage');
  }

  newbranch(){
     this.navCtrl.push('NewbranchPage');
  }

  collection(){
     this.navCtrl.push('CollectionPage');
  }

  newline(){
     this.navCtrl.push('NewlinePage');
  }

  settings(){
     this.navCtrl.push('SettingsPage');
  }

  myloan(){
     this.navCtrl.push('MyloanPage');
  }

  expense(){
     this.navCtrl.push('ExpensePage');
  }

  access(){
     this.navCtrl.push('AccessPage');
  }

  marksalary(){
     this.navCtrl.push('MarksalaryPage');
  }

  chart(){
     this.navCtrl.push('ChartPage');
  }

  track(){
     this.navCtrl.push('TrackerPage');
  }

  topup(){
     this.navCtrl.push('TopupPage');
  }

  addCustomers(){

    this.navCtrl.push('AddcustomerPage');
    // let body = JSON.stringify({
       
    //   method: 'addCustomer',
    //   username: 'prachigupta',
    //   firstname: 'prachi',
    //   lastname: 'gupta'

    //   }); 

    //  return new Promise(resolve => {
    //     this.httpClient.post('http://localhost:8888/finicity.php',body).subscribe(data => {
          
          
    //     resolve(data);
    //     }, err => {
    //     // console.log(err);
    //     });
    //     });
  }

}
