import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
	private loginUser: string = '';

  constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public alertCtrl: AlertController,
				public http: Http) {
				
		let url = this.navParams.get('apiUrl');
		this.loginUser = this.navParams.get('stateName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensagem!',
      subTitle: 'Você logou com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

}
