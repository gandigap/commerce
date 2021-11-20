import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from 'models/IGame';
import { fetchGames } from './ActionCreators';

interface GameState {
  games: IGame[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: GameState = {
  games: [],
  isLoading: false,
  error: '',
  count: 0,
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
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
  extraReducers: {
    [fetchGames.fulfilled.type]: (state, action: PayloadAction<IGame[]>) => {
      state.isLoading = false;
      state.error = '';
      state.games = action.payload;
    },
    [fetchGames.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchGames.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameSlice.reducer;
