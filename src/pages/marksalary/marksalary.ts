import { Component,ViewChild } from '@angular/core';
import { IonicPage,NavController, NavParams,Content,Slides,ModalController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-marksalary',
  templateUrl: 'marksalary.html',
})
export class MarksalaryPage {

  showPrev:any;
showNext:any;
currentIndex:any;

 @ViewChild(Content) content: Content;
@ViewChild('mySlider') slider: Slides;

  slidertab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.slidertab=0;

    /*let id = this.navParams.get("id");
    this.slidertab = id;
    console.log("id", id);
    setTimeout(() => {
    this.goToSlide(id);

  }, 500)*/



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarksalaryPage');
  }

  goToSlide(id) {
  this.slider.slideTo(id, 500);
}

slideChanged() {
 let currentIndex = this.slider.getActiveIndex();
 this.slidertab = currentIndex;
console.log("Current index is", currentIndex);
}



goBack(){
   this.navCtrl.pop();
 }

salaryfilter() {
     let modal = this.modalCtrl.create('SalaryfilterPage');
     modal.present();
   }

   owner(){
      this.navCtrl.push('OwnerPage');
   }

   partner(){
      this.navCtrl.push('PartnerPage');
   }

   agents(){
      this.navCtrl.push('AgentsPage');
   }


}
