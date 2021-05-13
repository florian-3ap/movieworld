import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieResponse } from '../../models/movies.model';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit {

  public movies: MovieResponse | null = null;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getPopular();
  }

  public getPopular = (page: number = 1) => {
    this.moviesService.getPopularMovies('de-CH', page, 'CH').subscribe((data: MovieResponse) => {
      this.movies = data;
    });
  };
}
