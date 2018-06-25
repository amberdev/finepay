import { Component } from '@angular/core';
import { NavController,IonicPage,NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chartfilter',
  templateUrl: 'chartfilter.html',
})
export class ChartfilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartfilterPage');
  }

  dismiss()
{
 this.viewCtrl.dismiss();
}

}
