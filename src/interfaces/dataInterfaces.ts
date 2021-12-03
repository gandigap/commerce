export interface IData {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  background_image: string;
  games_count: number;
  games: IDataGeneral[];
}
export interface IDataGeneral {
  id: number;
  name: string;
  slug: string;
  games_count: string;
  image_background: string;
}

export interface IFetchData {
  results: IData[];
}
