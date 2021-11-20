import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from 'models/IGame';

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
});

export default gameSlice.reducer;
