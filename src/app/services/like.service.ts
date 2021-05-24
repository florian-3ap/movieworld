import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LikeResponse } from '../models/like.model';
import { Movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private url = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  private getUrl(path: string): string {
    return `${this.url}/${path}`;
  }

  public getLikes(): Observable<LikeResponse> {
    return this.http.get<LikeResponse>(this.getUrl('likes'));
  }

  public like(id: number): Observable<Response> {
    return this.http.post<Response>(this.getUrl(`movie/${id}/like`), null);
  }

  public unlike(id: number): Observable<Response> {
    return this.http.delete<Response>(this.getUrl(`movie/${id}/like`));
  }

  public isLiked(movie: Movie): Observable<Response> {
    return this.http.get<Response>(this.getUrl(`movie/${movie.id}`));
  }
}
