import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addnewexpense',
  templateUrl: 'addnewexpense.html',
})
export class AddnewexpensePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewexpensePage');
  }

  goBack(){
  this.navCtrl.pop();
}


public event = {
     month: '2016-11-01',
     placeholder:'Date of Birth',
     timeStarts: '07:43',
     timeEnds: '2050-02-20'
   }

}
