import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_KEY, ConfigurationResponse } from '../models/tmdb.model';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../models/movies.model';
import { RequestQueryParam } from '../models/query.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public readonly configuration: Observable<ConfigurationResponse>;

  constructor(private http: HttpClient) {
    this.configuration = this.http.get<ConfigurationResponse>(MoviesService.getUrl(`configuration`));
  }

  private static getUrl(uri: string, queryParams: Array<RequestQueryParam> = []): string {
    return `${API_BASE_URL}/${uri}?api_key=${API_KEY}` + queryParams.map(item => `&${item.key}=${item.value}`);
  }

  public getConfiguration(): Observable<ConfigurationResponse> {
    return this.configuration;
  }

  public fetchNowPlaying(language: string, page: number, region: string): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>(MoviesService.getUrl(`movie/now_playing`, [
      {key: 'language', value: language},
      {key: 'page', value: page},
      {key: 'region', value: region},
    ]));
  }
}
