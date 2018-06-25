import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-myloan',
  templateUrl: 'myloan.html',
})
export class MyloanPage {
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyloanPage');
  }



  goBack(){
  this.navCtrl.pop();
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




loandetail(){
   this.navCtrl.push('LoandetailPage');
}



request(){
   this.navCtrl.push('RequestformPage');
}

}
