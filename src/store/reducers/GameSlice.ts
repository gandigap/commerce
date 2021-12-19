import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame, IGamePrimary } from 'interfaces/gameInterfaces';

interface GameState {
  games: IGame[];
  isLoadingGames: boolean;
  errorFetchGames: string;
  downloadGames: { [key: string]: IGamePrimary };
}

const initialState: GameState = {
  games: [],
  isLoadingGames: false,
  errorFetchGames: '',
  downloadGames: {},
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesFetching(state) {
      state.isLoadingGames = true;
    },
    gamesFetchingSuccess(state, action: PayloadAction<IGame[]>) {
      state.isLoadingGames = false;
      state.errorFetchGames = '';
      state.games = action.payload;
    },
    gamesFetchingError(state, action: PayloadAction<string>) {
      state.isLoadingGames = false;
      state.errorFetchGames = action.payload;
    },
    gameFetchingSuccess(state, action: PayloadAction<IGamePrimary>) {
      state.isLoadingGames = false;
      state.errorFetchGames = '';
      state.downloadGames[action.payload.slug] = action.payload;
    },
  },
});

export default gameSlice.reducer;
