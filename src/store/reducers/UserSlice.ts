import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/userInterfaces';
import { IGame } from 'interfaces/gameInterfaces';

interface IUserState {
  user: IUser;
  wishList: { [key: string]: IGame };
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: { email: '', token: '', id: '' },
  wishList: {},
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state, action: PayloadAction<IUser>) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeUser(state) {
      state.user.email = '';
      state.user.token = '';
      state.user.id = '';
    },
    addGameToWishList(state, action: PayloadAction<IGame>) {
      state.wishList[action.payload.slug] = action.payload;
    },
  },
});

export default userSlice.reducer;
