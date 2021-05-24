import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie, MovieDetails } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  public imageUrl = '';
  public isLiked = false;
  public movie: MovieDetails | null = null;

  @ViewChild('content') modalContent: TemplateRef<any> | undefined;

  constructor(private modalService: NgbModal, private movieService: MoviesService, private likeService: LikeService) {
  }

  public showModal(movie: Movie | null): void {
    if (movie) {
      this.movieService.getDetails(movie).subscribe(details => {
        this.movie = details;
      });
      this.likeService.isLiked(movie).subscribe((response) => {
        this.isLiked = response.status === 204;
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
    this.isLiked = false;
    this.movie = null;
  }

  public like(): void {
    if (this.movie?.id) {
      this.likeService.like(this.movie?.id).subscribe(response => {
        if (response.status === 200) {
          this.isLiked = true;
        }
      });
    }
  }

  public unlike(): void {
    if (this.movie?.id) {
      this.likeService.unlike(this.movie?.id).subscribe(response => {
        if (response.status === 200) {
          this.isLiked = false;
        }
      });
    }
  }
}
