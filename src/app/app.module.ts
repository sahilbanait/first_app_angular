import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import {WarningAlertComponent} from "./WarningAlert/warningAlert.Component";
import {SuccessAlertComponent} from "./SuccessAlert/successAlert.component";



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
    imports: [
        BrowserModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
