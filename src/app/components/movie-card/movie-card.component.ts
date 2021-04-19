import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  public movieDetails: Movie | null = null;
  public imageUrl!: string;

  @Input()
  set movie(movie: Movie | null) {
    this.movieDetails = movie;
    if (movie !== null) {
      this.movieService.getConfiguration().subscribe(configuration => {
        this.imageUrl = `${configuration.images.secure_base_url}${configuration.images.poster_sizes[configuration.images.poster_sizes.length - 1]}${movie.poster_path}`;
      });
    }
  }

  constructor(private movieService: MoviesService) {
  }
}
