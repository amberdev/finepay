import { Component } from '@angular/core';
import {IonicPage,NavController,ViewController,NavParams,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-loandetailpopover',
  templateUrl: 'loandetailpopover.html',
})
export class LoandetailpopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoandetailpopoverPage');
  }

  goBack()
  {
   this.viewCtrl.dismiss();
  }

  defaultpopup() {
      let modal = this.modalCtrl.create('DefaultpopupPage');
      modal.present();
      this.viewCtrl.dismiss();
    }
  closepopup() {
      let modal = this.modalCtrl.create('ClosepopupPage');
      modal.present();
      this.viewCtrl.dismiss();
    }

    settlepopup() {
        let modal = this.modalCtrl.create('SettlepopupPage');
        modal.present();
        this.viewCtrl.dismiss();
      }

      transferpopup() {
          let modal = this.modalCtrl.create('TransferpopupPage');
          modal.present();
          this.viewCtrl.dismiss();
        }

        newloan() {
            let modal = this.modalCtrl.create('NewloanPage');
            modal.present();
            this.viewCtrl.dismiss();
          }

}
