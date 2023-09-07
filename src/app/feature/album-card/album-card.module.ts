import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlbumCardComponent} from './album-card.component';


@NgModule({
  declarations: [
    AlbumCardComponent
  ],
  exports: [
    AlbumCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlbumCardModule {
}
