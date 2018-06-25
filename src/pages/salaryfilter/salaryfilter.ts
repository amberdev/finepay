import { Component } from '@angular/core';
import { NavController,IonicPage, NavParams,ViewController} from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-salaryfilter',
  templateUrl: 'salaryfilter.html',
})
export class SalaryfilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaryfilterPage');
  }

  dismiss()
{
 this.viewCtrl.dismiss();
}

}
