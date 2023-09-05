import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleBarComponent} from './title-bar.component';


@NgModule({
  declarations: [
    TitleBarComponent
  ],
  exports: [
    TitleBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TitleBarModule {
}
