export interface IGame {
  added: number;
  background_image: string;
  genres: [{ [key: string]: number }];
  id: number;
  name: string;
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

export interface IGames {
  results: IGame[];
}

export interface IGamePrimary {
  id: number;
  name: string;
  released: string;
  background_image: string;
}

export interface IGameCardProps {
  gameData: IGame;
}
