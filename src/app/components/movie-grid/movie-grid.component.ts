import { Component, Input, ViewChild } from '@angular/core';
import { Movie, MovieResponse } from '../../models/movies.model';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css'],
})
export class MovieGridComponent {

  @ViewChild(MovieDetailComponent)
  detailComponent!: MovieDetailComponent;

  @Input() title = '';

  public input: MovieResponse | null = null;

  @Input()
  set movies(movies: MovieResponse | null) {
    this.input = movies;
  }

  constructor() {
  }

  public openModal(movie: Movie | null): void {
    this.detailComponent.showModal(movie);
  }
}
