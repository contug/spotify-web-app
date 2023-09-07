import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {AlbumDetails, TrackResponse} from "../../model/searchResponse";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs";
import {SubscriptionHandlerComponent} from "../abstract/subscription-handler/subscription-handler.component";
import {DashboardUtilityService} from "../../service/dashboard-utility.service";

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent extends SubscriptionHandlerComponent implements OnInit {

  set albumId(value: string) {
    this.getTracks(value);
    this.getAlbum(value);
  }

  album?: AlbumDetails;
  trackResponse?: TrackResponse;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private dashboardUtilityService: DashboardUtilityService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.albumId = params.get('id')!;
    });
  }

  getTracks(albumId: string) {
    this.apiService.getTracks(albumId).subscribe(response => {
      console.log(response)
      this.trackResponse = response;
    });
  }

  getAlbum(albumId: string) {
    this.apiService.getAlbum(albumId).subscribe(response => {
      console.log(response)
      this.album = response;
    });
  }

  navigateBack() {
    this.router.navigate(['']);
    this.dashboardUtilityService.searchSubject.next(this.dashboardUtilityService.currentQuery);
  }
}
