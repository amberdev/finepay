import { Component } from '@angular/core';
import {IonicPage,NavController,PopoverController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-newloan',
  templateUrl: 'newloan.html',
})
export class NewloanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewloanPage');
  }

  goBack(){
  this.navCtrl.pop();
}


   newloanPopover(myEvent) {
    let popover = this.popoverCtrl.create('NewloanpopoverPage');
    popover.present({
      ev: myEvent
    });
  }

}
