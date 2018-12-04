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
        title: "What is rorem ipsum dolor?",
        description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        open: false
      },
      {
        title: "What is rorem ipsum dolor?",
        description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        open: false
      },
      {
        title: "What is rorem ipsum dolor?",
        description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        open: false

      },
      {
        title: "What is rorem ipsum dolor? with long text",
        description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        open: false
      }
    ]
  }


  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

}
