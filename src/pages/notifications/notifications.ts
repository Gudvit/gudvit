import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// injections
import { ActionsProvider } from "../../providers/actions/actions";


@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionService: ActionsProvider
  ) {
    this.actionService.presentToast('Congratulation it is your first push notification', 'with-icon', 4000)
  }

}
