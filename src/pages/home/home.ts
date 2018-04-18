import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';
import { EstadoPage } from '../estado/estado';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	homePage: boolean = true;
	photo: any;
	private url: string = `./assets/data/estadosbr.json`;
	public states: any;

	constructor(public navCtrl: NavController,
				public http: Http,
				public camera: Camera) {
		setTimeout(() => {
			this.homePage = false;
		}, 3000); 

		this.http.get(this.url)
				.map(res => res.json())
				.subscribe(data => {
					console.log(data);
					this.states = data.estados;
				});
	}

	goToTestPage() {
		this.navCtrl.push(TestPage);
	}

	getInfo(name) {
		this.navCtrl.push(EstadoPage, {
			'stateName': name.nome,
			'stateAbbreviation': name.sigla,
			'stateCities': name.cidades,
			'apiUrl': this.url
		});
	}

	getPhoto() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		
		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.photo = base64Image;
		}, (err) => {
			// Handle error
		});
	}
}
