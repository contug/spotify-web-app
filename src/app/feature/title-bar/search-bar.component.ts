import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DashboardUtilityService} from "../../service/dashboard-utility.service";

@Component({
  selector: 'app-title-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  currentQuery: string = '';

  private _search = new Subject<string>();
  search$ = this._search.asObservable();

  constructor(private dashboardUtilityService: DashboardUtilityService) {
  }

  ngOnInit(): void {
    this.dashboardUtilityService.searchSubject.pipe()
  }

  onKeyUp(query: string) {
    this.dashboardUtilityService.searchSubject.next(query);
  }

}
