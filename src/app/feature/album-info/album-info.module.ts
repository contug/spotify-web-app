import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlbumInfoComponent} from './album-info.component';
import {AlbumCardModule} from "../album-card/album-card.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AlbumInfoComponent
  ],
  imports: [
    CommonModule,
    AlbumCardModule,
    RouterModule.forChild([
      {path: '*', component: AlbumInfoComponent}
    ])
  ]
})
export class AlbumInfoModule {
}
