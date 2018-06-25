import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newline',
  templateUrl: 'newline.html',
})
export class NewlinePage {
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewlinePage');
  }

  goBack(){
  this.navCtrl.pop();
}

addnewline(){
     this.navCtrl.push('AddnewlinePage');
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

topup(){
   this.navCtrl.push('TopupPage');
}

agent(){
   this.navCtrl.push('AgentPage');
}
}
