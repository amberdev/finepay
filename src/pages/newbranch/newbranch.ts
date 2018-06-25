import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-newbranch',
  templateUrl: 'newbranch.html',
})
export class NewbranchPage {
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewbranchPage');
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




addnewbranch(){
   this.navCtrl.push('AddnewbranchPage');
}

topup(){
   this.navCtrl.push('TopupPage');
}

}
