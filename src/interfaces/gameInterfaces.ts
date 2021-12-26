import { IData } from './dataInterfaces';

export interface IGameCardProps {
  gameData: IGame;
}
export interface IGame {
  id: number;
  name: string;
  slug: string;
  added: number;
  background_image: string;
  genres: [{ [key: string]: number }];
  metacritic: number;
  parent_platforms: IDataGameParentPlatforms[];
  rating: number;
  released: string;
  short_screenshots: IDataGameShortScreenshot[];
}

export interface IDataGameShortScreenshot {
  id: number;
  image: string;
}

export interface IDataGameParentPlatforms {
  platform: { id: number; name: string; slug: string };
}

export interface IFetchGames {
  next:string | null;
  previous:string | null;
  results: IGame[];
}

export interface IGamePrimary {
  id: number;
  name: string;
  slug: string;
  released: string;
  description_raw: string;
  background_image: string;
  website: string;
  rating: { id: number; title: string; count: number; percent: number }[];
  added: number;
  stores: { id: number; store: IData }[];
  developers: IData[];
  tags: IData[];
  publishers: IData[];
}
