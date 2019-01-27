import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface IInfo {
  title: string;
  description: string;
  open: boolean;
}

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  information: IInfo[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.information = [
      {
        title: "What is it for?",
        description: "This application is an ordinary assistant for the Ionic 2-3 developer.",
        open: false
      },
      {
        title: "How to use it?",
        description: "This is open source code in which you can see how to use modules, components, which work for different platforms.",
        open: false
      },
      {
        title: "What is useful in this application?",
        description: "You can easily reuse the working code. Also see how it was implemented",
        open: false
      },
      {
        title: "This application will expand and you can follow the changes.",
        description: "You can also participate in the development and open pull requests and leave your comments.",
        open: false
      }
    ]
  }


  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

}
