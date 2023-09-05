import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {TokenResponse} from "../model/tokenResponse";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenResponse?: TokenResponse;

  private readonly client_id = '57e12233398f42e18f0c196596712c89'
  private readonly client_secret = '9faa7a9171b348e1b7a67287122834ac'

  constructor(private httpClient: HttpClient) {
  }

  /**
   * If token is already present in local storage, it checks if it is expired and refreshes it if needed.
   */
  getAccessToken() {
    let token = localStorage.getItem('access_token');
    if (token) {
      let expires_in = localStorage.getItem('expires_in');
      if (expires_in) {
        let expires_in_date = moment(expires_in);
        if (moment().isBefore(expires_in_date)) {
          console.log('Token still valid, refreshing timeout in: ' + -1 * moment().diff(expires_in_date, 'seconds') + ' seconds')
          this.onTokenTimeout();
        } else {
          console.log('Token expired, requesting new one')
          this.requestNewToken();
        }
      }
    } else {
      console.log('Token not present, requesting new one')
      this.requestNewToken();
    }
  }

  /**
   * Refreshes access token every 'expires_in' seconds
   */
  private onTokenTimeout() {
    setTimeout(() => {
      this.getAccessToken();
    }, moment(localStorage.getItem('expires_in')).diff(moment()));
  }

  /**
   * Gets access token from spotify api and stores it in local storage.
   * @private
   */
  private requestNewToken() {
    let options = {
      headers: new HttpHeaders()
    }
    options.headers = options.headers.set('Authorization', 'Basic ' + btoa(this.client_id + ':' + this.client_secret));
    options.headers = options.headers.set('Content-Type', 'application/x-www-form-urlencoded');

    lastValueFrom(this.httpClient.post<TokenResponse>(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      options)).then((res: TokenResponse) => {
      this.tokenResponse = res;
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('expires_in', moment().add(res.expires_in, 'seconds').format('YYYY-MM-DD HH:mm:ss'));
      this.onTokenTimeout();
    })
  }

}
