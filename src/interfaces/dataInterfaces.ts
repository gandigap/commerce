import { IGameAlternative } from './gameInterfaces';

export interface IData {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  background_image: string;
  games_count: number;
  games: IGameAlternative[];
}

export interface ITotalData {
  results: IData[];
}
