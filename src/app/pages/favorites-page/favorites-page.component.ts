import { Component, OnInit } from '@angular/core';
import { Movie, MovieResponse } from '../../models/movies.model';
import { LikeService } from '../../services/like.service';
import { Like, LikeResponse } from '../../models/like.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  public favorites: MovieResponse = {
    total_pages: 1,
    page: 1,
    total_results: 1,
    results: [],
  };

  constructor(private likeService: LikeService, private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.getFavorites();
  }

  public getFavorites = () => {
    this.likeService.getLikes().subscribe((response: LikeResponse) => {
      if (response.status === 200) {
        response.payload.map((like: Like) => {
          this.movieService.getById(like.movieId).subscribe((movie: Movie) => {
            this.favorites.results.push(movie);
          });
        });
      }
    });
  };
}
