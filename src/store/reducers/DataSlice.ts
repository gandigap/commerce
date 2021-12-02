import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData } from 'interfaces/dataInterfaces';

interface IDataState {
  data: IData[];
  isLoading: boolean;
  error: string;
}

const initialState: IDataState = {
  data: [],
  isLoading: false,
  error: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataFetching(state) {
      state.isLoading = true;
    },
    dataFetchingSuccess(state, action: PayloadAction<IData[]>) {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    dataFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default dataSlice.reducer;
