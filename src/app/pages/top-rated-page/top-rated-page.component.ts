import { Component, OnInit } from '@angular/core';
import { MovieResponse } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrls: ['./top-rated-page.component.css']
})
export class TopRatedPageComponent implements OnInit {

  public nowPlaying: MovieResponse | null = null;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  public getTopRatedMovies = (page: number = 1) => {
    this.moviesService.getTopRatedMovies('de-CH', page, 'CH').subscribe((response: MovieResponse) => {
      this.nowPlaying = response;
    });
  };
}
