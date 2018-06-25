import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-collectionfilter',
  templateUrl: 'collectionfilter.html',
})
export class CollectionfilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionfilterPage');
  }

  public event = {
       month: '2016-11-01',
       placeholder:'Date of Birth',
       timeStarts: '07:43',
       timeEnds: '2050-02-20'
     }
  dismiss()
{
 this.viewCtrl.dismiss();
}

}
