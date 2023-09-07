import {Component, OnInit} from '@angular/core';
import {DashboardUtilityService} from "../../service/dashboard-utility.service";
import {ApiService} from "../../service/api.service";
import {SubscriptionHandlerComponent} from "../abstract/subscription-handler/subscription-handler.component";
import {takeUntil} from "rxjs";
import {SearchResponse} from "../../model/searchResponse";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends SubscriptionHandlerComponent implements OnInit {

  albumData?: SearchResponse;

  constructor(
    private dashboardUtilityService: DashboardUtilityService,
    private apiService: ApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.dashboardUtilityService.searchResponse$.pipe(takeUntil(this.destroy$)).subscribe(
      response => {
        console.log(response);
        this.albumData = response
      });

  }

}
