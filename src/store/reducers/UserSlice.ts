import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/userInterfaces';

const initialState: IUser = {
  email: '',
  token: '',
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = '';
      state.token = '';
      state.id = '';
    },
  },
});

export default userSlice.reducer;
