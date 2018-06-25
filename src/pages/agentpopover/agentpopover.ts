import { Component } from '@angular/core';
import {IonicPage,NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-agentpopover',
  templateUrl: 'agentpopover.html',
})
export class AgentpopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentpopoverPage');
  }

  dismiss(){
   this.viewCtrl.dismiss();  
  }


  newuser(){
     this.navCtrl.push('NewuserPage');
     this.viewCtrl.dismiss();
  }


  selectuser() {
  let modal = this.modalCtrl.create('SelectuserPage');
  modal.present();
}

}
