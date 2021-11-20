export interface IGame {
  id: number;
  name: string;
  background_image: string;
}

export interface IGames {
  results: IGame[];
}
