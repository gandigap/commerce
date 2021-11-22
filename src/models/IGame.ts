export interface IGame {
  added: number;
  background_image: string;
  genres: object[];
  id: number;
  name: string;
  parent_platforms: object[];
  rating: number;
  released: string;
}

export interface IGames {
  results: IGame[];
}
