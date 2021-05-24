export interface MovieResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<Movie>;
}

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export interface GenreResponse {
  genres: Array<Genre>;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface MovieDetails {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  budget: number;
  genres: Array<Genre>;
  homepage: string | null;
  overview: string | null;
  release_date: string;
  popularity: number;
  revenue: number;
  runtime: number | null;
  production_companies: Array<ProductionCompany>;
  title: string;
  video: boolean;
  status: string;
  vote_average: number;
  vote_count: number;
}
