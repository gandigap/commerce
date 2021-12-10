export interface IData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image?: string | null;
  image_background: string;
  positions?: IPositions[];
  domain?: string;
}

export interface IFetchData {
  results: IData[];
}

export interface IPositions {
  id: number;
  name: string;
  slug: string;
}
