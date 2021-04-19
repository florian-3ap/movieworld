export interface NowPlayingResponse {
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
