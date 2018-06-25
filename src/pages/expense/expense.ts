import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
})
export class ExpensePage {
shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensePage');
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

addnewexpense(){
   this.navCtrl.push('AddnewexpensePage');
}

}
