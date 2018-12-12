import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from "@ionic-native/camera";

import { MyApp } from './app.component';
import { ActionsProvider } from '../providers/actions/actions';
import { ProfileProvider } from '../providers/profile/profile';
import { ApiProvider } from '../providers/api/api';
import { ValidationProvider } from '../providers/validation/validation';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ActionsProvider,
    ProfileProvider,
    ApiProvider,
    ValidationProvider
  ]
})
export class AppModule {}
