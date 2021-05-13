import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  public imageUrl!: string;
  public movieDetails: Movie | null = null;

  @Output() onClick: EventEmitter<Movie | null> = new EventEmitter<Movie | null>();

  @Input()
  set movie(movie: Movie | null) {
    this.movieDetails = movie;
    if (movie !== null) {
      this.movieService.getConfiguration().subscribe(configuration => {
        if (movie.poster_path) {
          this.imageUrl = `${configuration.images.secure_base_url}${configuration.images.poster_sizes[configuration.images.poster_sizes.length - 1]}${movie.poster_path}`;
        } else {
          this.imageUrl = '/assets/default-fallback-image.png';
        }
      });
    }
  }

  constructor(private movieService: MoviesService) {
  }

  public cardClick(): void {
    this.onClick.emit(this.movieDetails);
  }
}
