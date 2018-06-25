import { Component,ViewChild,ElementRef  } from '@angular/core';
import { NavController,NavParams,IonicPage,ViewController } from 'ionic-angular';
declare var google;
@IonicPage()
@Component({
  selector: 'page-trackermap',
  templateUrl: 'trackermap.html',
})
export class TrackermapPage {
  @ViewChild('map') mapElement: ElementRef;
map: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  goBack(){
  this.navCtrl.pop();
}
loadMap(){

   let latLng = new google.maps.LatLng(-34.9290, 138.6010);

   let mapOptions = {
     center: latLng,
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

 }

}
