import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-loandetail',
  templateUrl: 'loandetail.html',
})
export class LoandetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoandetailPage');
  }

  goBack(){
  this.navCtrl.pop();
}


   loandetailpopover(myEvent) {
    let popover = this.popoverCtrl.create('LoandetailpopoverPage');
    popover.present({
      ev: myEvent
    });
  }

}
