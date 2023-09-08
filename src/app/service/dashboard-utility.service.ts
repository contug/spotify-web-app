import {Injectable} from '@angular/core';
import {debounceTime, iif, Observable, of, Subject, switchMap, tap} from "rxjs";
import {SearchResponse} from "../model/searchResponse";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardUtilityService {

  searchSubject = new Subject<string>();

  scrollSubject = new Subject<boolean>();

  currentQuery: string = '';

  nextUrl?: string;


  constructor(
    private apiService: ApiService
  ) {
  }


  searchResponse$: Observable<SearchResponse> = this.searchSubject.pipe(
    debounceTime(500),
    tap((query) => {
      this.currentQuery = query;
    }),
    switchMap(query =>
      iif(() => query.length > 0 && this.isNotWhitespace(query),
        this.apiService.search(query),
        this.apiService.getNewReleases())
    ),
    tap(response => {

      this.nextUrl = response.albums.next ? response.albums.next : '';  //scrolling request url
    })
  );

  scrollResponse$: Observable<SearchResponse | null> = this.scrollSubject.pipe(
    switchMap(() =>
      iif(() => this.nextUrl != null,
        this.apiService.onScroll(this.nextUrl!),
        of(null))),
    tap(response => {
      this.nextUrl = response?.albums.next
    })
  )

  private isNotWhitespace(query: string): boolean {
    return query.trim().length !== 0;
  }


}
