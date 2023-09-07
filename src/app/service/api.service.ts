import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {AlbumDetails, SearchResponse, TrackResponse} from "../model/searchResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // can be changed based on locale
  private readonly baseUrl = 'https://api.spotify.com/v1/'
  private readonly newReleasesUrl = 'browse/new-releases?'
  private readonly searchUrl = 'search?q='
  private readonly market = '&market=IT'
  private readonly type = 'type=album'
  private readonly limit = '&limit=50'
  private readonly offset = '&offset=15'

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  search(query: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      this.baseUrl + this.searchUrl + query + '&' + this.type + this.limit + this.offset,
      this.authService.getHttpHeaders()
    );
  }

  onScroll(nextUrl: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      nextUrl,
      this.authService.getHttpHeaders()
    );
  }

  getNewReleases(): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      this.baseUrl + this.newReleasesUrl + this.type + this.limit + this.offset,
      this.authService.getHttpHeaders()
    );
  }


  getTracks(albumId: string): Observable<TrackResponse> {
    return this.httpClient.get<TrackResponse>(
      this.baseUrl + 'albums/' + albumId + '/tracks',
      this.authService.getHttpHeaders()
    );
  }

  getAlbum(albumId: string): Observable<AlbumDetails> {
    return this.httpClient.get<AlbumDetails>(
      this.baseUrl + 'albums/' + albumId,
      this.authService.getHttpHeaders()
    );
  }


}
