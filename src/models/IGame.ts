export interface IGame {
  added: number;
  background_image: string;
  genres: [{ [key: string]: number }];
  id: number;
  name: string;
  metacritic: number;
  parent_platforms: object[];
  rating: number;
  released: string;
  short_screenshots: object[];
}

export interface IGames {
  results: IGame[];
}
