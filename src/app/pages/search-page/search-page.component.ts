import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { MovieResponse } from '../../models/movies.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  movies: MovieResponse | null = null;

  searchForm = this.formBuilder.group({
    searchInput: '',
  });

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.search) {
        this.searchForm.controls.searchInput.setValue(params.search);
        this.find(1);
      }
    });
  }

  onSubmit(): void {
    this.changingQueryParams();
    this.find(1);
  }

  changingQueryParams(): void {
    const queryParams: Params = {search: this.searchForm.value.searchInput};

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge',
      });
  }

  find(page: number): void {
    this.moviesService.find(this.searchForm.value.searchInput, page).subscribe(response => {
      this.movies = response;
    });
  }
}
