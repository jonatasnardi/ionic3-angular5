import { AuthProvider } from '../../providers/auth/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the EstadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estado',
  templateUrl: 'estado.html',
})
export class EstadoPage {
	private stateName: string = '';
	private stateAbbreviation: string = '';
	private stateCities: any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams,
				public http: Http,
				public authService: AuthProvider) {
		
			let url = this.navParams.get('apiUrl');
			this.stateName = this.navParams.get('stateName');
			this.stateAbbreviation = this.navParams.get('stateAbbreviation');
			this.stateCities = this.navParams.get('stateCities');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EstadoPage');
	}

	// bloqueia o acesso à view
	ionViewCanEnter() {
		return this.authService.userIsLogged();
	}

	
}
