export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '08d5b3a6f62a771080ccc6498822e799';

export interface ConfigurationResponse {
  images: ImageConfiguration;
  change_keys: Array<string>;
}

export interface ImageConfiguration {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: Array<string>;
  logo_sizes: Array<string>;
  poster_sizes: Array<string>;
  profile_sizes: Array<string>;
  still_sizes: Array<string>;
}
