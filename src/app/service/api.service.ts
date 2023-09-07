import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {SearchResponse} from "../model/searchResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // can be changed based on locale
  private readonly baseUrl = 'https://api.spotify.com/v1/'
  private readonly searchUrl = 'search?q='
  private readonly market = '&market=IT'
  private readonly type = '&type=album'
  private readonly limit = '&limit=30'
  private readonly offset = '&offset=15'

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  search(query: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      this.baseUrl + this.searchUrl + query + this.market + this.type + this.limit + this.offset,
      this.authService.getHttpHeaders()
    );
  }

  onSearchScroll(nextUrl: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      nextUrl,
      this.authService.getHttpHeaders()
    );
  }

  getNewReleases(): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      'https://api.spotify.com/v1/browse/new-releases',
      this.authService.getHttpHeaders()
    );
  }

  onNewReleaseScroll(nextUrl: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      nextUrl,
      this.authService.getHttpHeaders()
    );
  }


}
