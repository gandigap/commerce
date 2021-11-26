import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from 'models/IGame';

interface GameState {
  games: IGame[];
  isLoading: boolean;
  error: string;
  downloadGames: IGame[];
  currentGameId: number;
}

const initialState: GameState = {
  games: [],
  isLoading: false,
  error: '',
  downloadGames: [],
  currentGameId: 0,
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
    gameFetching(state) {
      state.isLoading = true;
    },
    gameFetchingSuccess(state, action: PayloadAction<IGame[]>) {
      state.isLoading = false;
      state.error = '';
      state.games = action.payload;
    },
    setCurrentGameId(state, action: PayloadAction<number>) {
      state.currentGameId = action.payload;
    },
  },
});

export default gameSlice.reducer;
