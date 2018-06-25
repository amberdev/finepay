import { Component } from '@angular/core';
import { IonicPage,NavController,ViewController,NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-newloanpopover',
  templateUrl: 'newloanpopover.html',
})
export class NewloanpopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewloanpopoverPage');
  }

  daily(){
     this.navCtrl.push('DailyPage');
     this.viewCtrl.dismiss();
  }

  weekly(){
     this.navCtrl.push('WeeklyPage');
     this.viewCtrl.dismiss();
  }

  monthly(){
     this.navCtrl.push('MonthlyPage');
     this.viewCtrl.dismiss();
  }

  gold(){
     this.navCtrl.push('GoldPage');
     this.viewCtrl.dismiss();
  }

  adjustment(){
     this.navCtrl.push('AdjustmentPage');
     this.viewCtrl.dismiss();
  }

}
