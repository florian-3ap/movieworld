import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie, MovieDetails } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  public imageUrl = '';
  public movie: MovieDetails | null = null;

  @ViewChild('content') modalContent: TemplateRef<any> | undefined;

  constructor(private modalService: NgbModal, private movieService: MoviesService) {
  }

  public showModal(movie: Movie | null): void {
    if (movie) {
      this.movieService.getDetails(movie).subscribe(details => {
        this.movie = details;
      });

      this.movieService.getConfiguration().subscribe(configuration => {
        if (movie.poster_path) {
          this.imageUrl = `${configuration.images.secure_base_url}${configuration.images.poster_sizes[configuration.images.poster_sizes.length - 1]}${movie.poster_path}`;
        } else {
          this.imageUrl = '/assets/default-fallback-image.png';
        }
      });

      this.openModal();
    }
  }

  private openModal(): void {
    this.modalService.open(this.modalContent, {centered: true, size: 'xl'}).result.then(() => {
      this.clearState();
    }, () => {
      this.clearState();
    });
  }

  private clearState(): void {
    this.imageUrl = '';
    this.movie = null;
  }
}
