import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {AlbumCardModule} from "../album-card/album-card.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AlbumCardModule
  ]
})
export class DashboardModule {
}
