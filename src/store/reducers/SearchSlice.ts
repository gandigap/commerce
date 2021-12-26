import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from 'interfaces/gameInterfaces';
interface ISearchState {
  searchGames: IGame[];
  isLoading: boolean;
  error: String;
}

const initialState: ISearchState = {
  searchGames: [],
  isLoading: false,
  error: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchFetching(state) {
      state.isLoading = true;
    },
    searchFetchingSuccess(state, action: PayloadAction<IGame[]>) {
      state.isLoading = false;
      state.error = '';
      state.searchGames = action.payload;
    },
    searchFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearSearchList(state) {
      state.searchGames = [];
    },
  },
});

export default searchSlice.reducer;
