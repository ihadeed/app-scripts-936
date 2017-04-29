import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from "ionic-angular";

@Injectable()
export class MyService {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {

  }

  produceIssue() {

    this.loadingCtrl.create({ content: 'They see me loading...' })
      .present();

    // this.alertCtrl.create({
    //   title: 'Hello',
    //   buttons: ['Dismiss']
    // }).present();
  }

}
