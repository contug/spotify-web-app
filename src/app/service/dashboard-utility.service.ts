import {Injectable} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {SearchResponse} from "../model/searchResponse";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardUtilityService {

  searchSubject = new Subject<string>();

  searchResponse$: Observable<SearchResponse> = this.searchSubject.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(query =>
      this.apiService.search(query))
  )

  constructor(
    private apiService: ApiService
  ) {
  }


}
