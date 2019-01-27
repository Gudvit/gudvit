import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      // private youtube: YoutubeVideoPlayer
  ) {}

}
