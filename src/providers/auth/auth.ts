import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
	private msg: string = 'É preciso logar para acessar.' 
	constructor(public http: Http,
				public storage: Storage,
				public toastCtrl: ToastController) {
		console.log('Hello AuthProvider Provider');
	}

	login(credentials) {
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

		// let options = new RequestOptions({ headers: headers});

		// this.http.post('/beers', credentials, options)
		// 	.map(res => res.json())
		// 	.subscribe(data => {
		// 		console.log(data);
		// 		// let toast = this.toastCtrl.create({
		// 		// 	message: data.msg,
		// 		// 	duration: 3000
		// 		// })
		// 		// toast.preent();
		// 	});

		this.storage.set('token', 'test');
	}

	userIsLogged() {
		return this.storage.get('token').then(val => {
			if(val != undefined) {
				return val;
			} else {
				let toast = this.toastCtrl.create({
								message: this.msg,
								duration: 3000
							});
				toast.present();
				return false;
			}
		});
	}

	logout() {
		this.storage.remove('token');
	}

}
