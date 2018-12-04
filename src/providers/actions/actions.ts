import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from 'ionic-angular';

interface IMenu {
  title: string,
  component: any,
  isActive: boolean,
  icon: string,
  activeIcon: string
}

@Injectable()
export class ActionsProvider {
  pages: IMenu[];
  progressBarLoader: any;

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    this.returnPages();
  }

  returnPages() {
     this.pages = [
       {
         title: 'My Profile',
         component: 'ProfilePage',
         isActive: false,
         icon: '/assets/icons/avatar.svg',
         activeIcon: '/assets/icons/avatar-w.svg'
       },
       {
         title: 'Notifications',
         component: 'NotificationsPage',
         isActive: false,
         icon: '/assets/icons/notification.svg',
         activeIcon: '/assets/icons/notification-w.svg'
       },
       {
         title: 'Files',
         component: 'FilesPage',
         isActive: false,
         icon: '/assets/icons/file.svg',
         activeIcon: '/assets/icons/file-w.svg'
       },
       {
         title: 'Payments',
         component: 'PaymentsPage',
         isActive: false,
         icon: '/assets/icons/wallet.svg',
         activeIcon: '/assets/icons/wallet-w.svg'
       },
       {
         title: 'Forms',
         component: 'FormsPage',
         isActive: false,
         icon: '/assets/icons/form.svg',
         activeIcon: '/assets/icons/form-w.svg'
       },
       {
         title: 'Maps',
         component: 'MapsPage',
         isActive: false,
         icon: '/assets/icons/map.svg',
         activeIcon: '/assets/icons/map-w.svg'
       },
       {
         title: 'Chats',
         component: 'ChatsPage',
         isActive: false,
         icon: '/assets/icons/chat.svg',
         activeIcon: '/assets/icons/chat-w.svg'
       },
       {
         title: 'Modules',
         component: 'ModulesPage',
         isActive: false,
         icon: '/assets/icons/modules.svg',
         activeIcon: '/assets/icons/modules-w.svg'
       },
       {
         title: 'Help',
         component: 'HelpPage',
         isActive: false,
         icon: '/assets/icons/information.svg',
         activeIcon: '/assets/icons/information-w.svg'
       },
       {
         title: 'Logout',
         component: 'HomePage',
         isActive: false,
         icon: '/assets/icons/logout.svg',
         activeIcon: '/assets/icons/logout-w.svg'
       },
     ]
  }

  showLoader(timeInMilliseconds) {
    this.progressBarLoader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: timeInMilliseconds,
    });
    this.progressBarLoader.present();
  }

  hideLoader() {
    try {
      if (this.progressBarLoader != null || this.progressBarLoader != undefined) {
        this.progressBarLoader.dismiss();
      }
    } catch (err) {
      console.log('Busy Indicator not showing: ' + err.message);
    }
  }

  presentAlert(text) {
    let alert = this.alertCtrl.create({
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentToast(text, color) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2500,
      position: 'top',
      cssClass: color
    });
    toast.present();
  }
}
