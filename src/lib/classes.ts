export interface IOptions {
  where?: object;
  limit?: number;
  page?: number;
  order?: string;
}

export interface IExternalMovieOptionsFromMain {
  page?: number;
  limit?: number;
  query?: object;
}

export interface IExternalMovieOptionsFromSecond {
  countries?: Array<number>;
  genres?: Array<number>;
  order?: 'RATING' | 'NUM_VOTE' | 'YEAR';
  type?: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
  ratingFrom?: number;
  ratingTo?: number;
  yearFrom?: number;
  yearTo?: number;
  imdbId?: string;
  page: 1;
}
