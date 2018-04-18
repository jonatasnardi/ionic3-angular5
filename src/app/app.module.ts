import { IonicStorageModule } from '@ionic/storage/dist';
import { Camera } from '@ionic-native/camera';
import { EstadoPage } from '../pages/estado/estado';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestPage } from '../pages/test/test';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
	ListPage,
	LoginPage,
	EstadoPage
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	HttpModule,
	IonicStorageModule.forRoot({name: '__mydb'}),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
	ListPage,
	LoginPage,
	TestPage,
	EstadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
	Camera,
    AuthProvider
  ]
})
export class AppModule {}
