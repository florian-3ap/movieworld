import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_KEY, ConfigurationResponse } from '../models/tmdb.model';
import { Observable } from 'rxjs';
import { GenreResponse, Movie, MovieDetails, MovieResponse } from '../models/movies.model';
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
    return `${API_BASE_URL}/${uri}?api_key=${API_KEY}` + queryParams.map(item => `&${item.key}=${item.value}`).join('');
  }

  public getConfiguration(): Observable<ConfigurationResponse> {
    return this.configuration;
  }

  public fetchNowPlaying(language: string, page: number, region: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`movie/now_playing`, [
      {key: 'language', value: language},
      {key: 'page', value: page},
      {key: 'region', value: region},
    ]));
  }

  public getDetails(movie: Movie): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(MoviesService.getUrl(`movie/${movie.id}`));
  }

  public getPopularMovies(language: string, page: number, region: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`movie/popular`, [
      {key: 'language', value: language},
      {key: 'page', value: page},
      {key: 'region', value: region},
    ]));
  }

  public getTopRatedMovies(language: string, page: number, region: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`movie/top_rated`, [
      {key: 'language', value: language},
      {key: 'page', value: page},
      {key: 'region', value: region},
    ]));
  }

  public getGenres(language: string): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(MoviesService.getUrl(`genre/movie/list`, [
      {key: 'language', value: language},
    ]));
  }

  public getById(id: number): Observable<Movie> {
    return this.http.get<Movie>(MoviesService.getUrl(`movie/${id}`));
  }

  public discover(genre: number, page: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`discover/movie`, [
      {key: 'with_genres', value: genre},
      {key: 'page', value: page},
    ]));
  }

  public find(search: string, page: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(MoviesService.getUrl(`search/movie`, [
      {key: 'query', value: search},
      {key: 'page', value: page},
    ]));
  }
}
