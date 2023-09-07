import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./feature/dashboard/dashboard.component";
import {AlbumInfoComponent} from "./feature/album-info/album-info.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'album/:id',
    component: AlbumInfoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
