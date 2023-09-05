import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleBarModule} from "./title-bar/title-bar.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AlbumInfoModule} from "./album-info/album-info.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TitleBarModule,
    DashboardModule,
    AlbumInfoModule
  ],
  exports: [
    TitleBarModule,
    DashboardModule,
    AlbumInfoModule
  ]
})
export class FeaturesModule {
}
