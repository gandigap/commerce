export interface IData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image?: string | null;
  image_background: string;
  positions?: IGeneralInfo[];
  domain?: string;
  games: IGeneralInfo[];
}

export interface IFetchData {
  results: IData[];
}

export interface IGeneralInfo {
  id: number;
  name: string;
  slug: string;
  added?: number;
}
