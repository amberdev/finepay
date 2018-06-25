import { Component } from '@angular/core';
import { NavController,NavParams,IonicPage,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  shownGroup = null;
  shownChild1 = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

  chartfilter() {
       let modal = this.modalCtrl.create('ChartfilterPage');
       modal.present();
     }

     toggleGroup(group) {
         if (this.isGroupShown(group)) {
             this.shownGroup = null;
         } else {
             this.shownGroup = group;
         }
     };
     isGroupShown(group) {
         return this.shownGroup === group;
     };



     toggleChild1(child1) {
         if (this.isChild1Shown(child1)) {
             this.shownChild1 = null;
         } else {
             this.shownChild1 = child1;
         }
     };
     isChild1Shown(child1) {
         return this.shownChild1 === child1;
     };


}
