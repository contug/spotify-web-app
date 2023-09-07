import {Component, HostListener, OnInit} from '@angular/core';
import {DashboardUtilityService} from "../../service/dashboard-utility.service";
import {ApiService} from "../../service/api.service";
import {SubscriptionHandlerComponent} from "../abstract/subscription-handler/subscription-handler.component";
import {takeUntil} from "rxjs";
import {Item} from "../../model/searchResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends SubscriptionHandlerComponent implements OnInit {

  nextUrl?: string = this.dashboardUtilityService.nextUrl;

  albumData: Item[] = [];

  constructor(
    private dashboardUtilityService: DashboardUtilityService,
    private apiService: ApiService,
    private router: Router
  ) {
    super();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.dashboardUtilityService.scrollSubject.next(true);
    }
  }

  ngOnInit(): void {
    this.dashboardUtilityService.searchResponse$.pipe(takeUntil(this.destroy$)).subscribe(
      response => {
        console.log(response);

        this.albumData = response.albums.items;
      },
      error => {
        console.log(error);
      });

    this.dashboardUtilityService.searchSubject.next(this.dashboardUtilityService.currentQuery);

    this.dashboardUtilityService.scrollResponse$.pipe(takeUntil(this.destroy$)).subscribe(
      res => {
        console.log(res)
        if (res != null) {
          this.albumData.push(...res.albums.items);
        }
      },
      error => {
        console.log(error);
      });
  }

  navigateToAlbum(albumId: string) {
    this.router.navigate(['album', albumId]);
  }

}
