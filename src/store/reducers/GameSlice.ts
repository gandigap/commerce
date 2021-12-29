import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame, IGamePrimary } from 'interfaces/gameInterfaces';

interface GameState {
  games: IGame[];
  isLoading: boolean;
  error: string;
  downloadGames: { [key: string]: IGamePrimary };
}

const initialState: GameState = {
  games: [],
  isLoading: false,
  error: '',
  downloadGames: {},
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesFetching(state) {
      state.isLoading = true;
    },
    gamesFetchingSuccess(state, action: PayloadAction<IGame[]>) {
      state.isLoading = false;
      state.error = '';
      state.games = action.payload;
    },
    gamesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    gameFetchingSuccess(state, action: PayloadAction<IGamePrimary>) {
      state.isLoading = false;
      state.error = '';
      state.downloadGames[action.payload.slug] = action.payload;
    },
  },
});

export default gameSlice.reducer;
