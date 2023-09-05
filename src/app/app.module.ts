import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FeaturesModule} from "./features/features.module";
import {AuthService} from "./service/auth.service";
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
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
