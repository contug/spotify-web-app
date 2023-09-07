import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarModule} from "./search-bar/search-bar.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AlbumInfoModule} from "./album-info/album-info.module";
import {SubscriptionHandlerComponent} from './abstract/subscription-handler/subscription-handler.component';


@NgModule({
  declarations: [
    SubscriptionHandlerComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    DashboardModule,
    AlbumInfoModule
  ],
  exports: [
    SubscriptionHandlerComponent,
    SearchBarModule,
    DashboardModule,
    AlbumInfoModule
  ]
})
export class FeaturesModule {
}
