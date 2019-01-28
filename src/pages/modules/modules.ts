import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modules',
  templateUrl: 'modules.html',
})
export class ModulesPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {}

  goToYoutube() {
    this.navCtrl.push('YoutubePage');
  }

}
