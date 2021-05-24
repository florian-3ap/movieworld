export interface Like {
  _id: string;
  movieId: number;
}

export interface LikeResponse {
  status: number;
  payload: Array<Like>;
}
