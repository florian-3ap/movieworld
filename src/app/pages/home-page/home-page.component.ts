import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie, NowPlayingResponse } from '../../models/movies.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public nowPlaying: Movie[] = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getNowPlaying();
  }

  public getNowPlaying = (page: number = 1) => {
    this.moviesService.fetchNowPlaying('de-CH', page, 'CH').subscribe((response: NowPlayingResponse) => {
      this.nowPlaying = response.results;
    });
  };
}
