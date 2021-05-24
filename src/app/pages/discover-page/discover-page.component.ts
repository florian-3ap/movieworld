import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Genre, MovieResponse } from '../../models/movies.model';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent implements OnInit {

  public genres: Array<Genre> = [];
  public movies: MovieResponse | null = null;
  public selectedGenre: Genre | null = null;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getGenres();
  }

  private getGenres(): void {
    this.moviesService.getGenres('de-CH').subscribe(response => {
      this.genres = response.genres;
      this.selectGenre(this.genres[0]);
    });
  }

  public selectGenre(genre: Genre): void {
    this.selectedGenre = genre;
    this.discoverGenre(1);
  }

  public discoverGenre(page: number): void {
    if (this.selectedGenre) {
      this.moviesService.discover(this.selectedGenre.id, page).subscribe((response) => {
        this.movies = response;
      });
    }
  }
}
