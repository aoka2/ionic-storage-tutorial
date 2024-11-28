import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//detabese import
import {Drivers} from '@ionic/storage'; //Ionic storage drivers, we are going to use local storage
import {IonicStorageModule} from '@ionic/storage-angular'; // Ionic's angular storage module
import {StorageService} from 'src/app/services/storage.service'; // Our Storage service which we have created

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot({name: '__mydb', driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]}), //Import Ionic storage for root
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StorageService, //Add our Storage service as  provider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
