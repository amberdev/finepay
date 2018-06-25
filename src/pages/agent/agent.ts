import { Component } from '@angular/core';
import { NavController,IonicPage, NavParams,PopoverController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-agent',
  templateUrl: 'agent.html',
})
export class AgentPage {
shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentPage');
  }
  agentpopover(myEvent) {
   let popover = this.popoverCtrl.create('AgentpopoverPage');
   popover.present({
     ev: myEvent
   });
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






}
