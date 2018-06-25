import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-requestform',
  templateUrl: 'requestform.html',
})
export class RequestformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestformPage');
  }

  goBack(){
  this.navCtrl.pop();
}

  loanrequest(){
     this.navCtrl.push('LoanrequestPage');
  }

  public event = {
       month: '2016-11-01',
       placeholder:'Date of Birth',
       timeStarts: '07:43',
       timeEnds: '2050-02-20'
     }

}
