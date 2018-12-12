import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
// injections
import { ActionsProvider } from "../../providers/actions/actions";
import { ProfileProvider } from "../../providers/profile/profile";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  showPreview: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public profileService: ProfileProvider,
    public actionService: ActionsProvider
  ) {
    this.menu.swipeEnable(true);
    // selected current page in sidebar
    this.actionService.pages.map(page => {
      delete page.isActive;
      if(page.title === 'My Profile') page.isActive = true;
    });
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage')
  }

  showImage() {
    this.showPreview = true;
  }

  closePreview() {
    this.showPreview = false;
  }
}
