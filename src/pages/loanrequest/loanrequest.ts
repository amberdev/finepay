import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-loanrequest',
  templateUrl: 'loanrequest.html',
})
export class LoanrequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanrequestPage');
  }

  goBack(){
  this.navCtrl.pop();
}

deny() {
    let modal = this.modalCtrl.create('DenyPage');
    modal.present();
  }

}
