import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FeaturesModule} from "./feature/features.module";
import {AuthService} from "./service/auth.service";
import {AppRoutingModule} from './app-routing.module';
import {DashboardUtilityService} from "./service/dashboard-utility.service";
import {ApiService} from "./service/api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeaturesModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ApiService,
    DashboardUtilityService,
    {provide: APP_INITIALIZER, useFactory: authInitFunction, deps: [AuthService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//use authService getAccessToken function in app module for bootstrapping
export function authInitFunction(authService: AuthService) {
  return () => authService.getAccessToken();
}
