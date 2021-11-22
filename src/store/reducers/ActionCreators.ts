import axios from 'axios';
import { IGames } from 'models/IGame';
import { AppDispatch } from 'store/store';
import { gameSlice } from './GameSlice';

export const fetchGames = () => async (dispatch: AppDispatch) => {
  console.log('start');
  try {
    dispatch(gameSlice.actions.gamesFetching());
    const response = await axios.get<IGames>(`https://api.rawg.io/api/games?`, {
      params: {
        key: 'dc31c2a55aa444959f74eb7bc96b0617',
        page: 1,
        page_size: 30,
      },
    });
    console.log(response.data, 'data');
    dispatch(gameSlice.actions.gamesFetchingSuccess(response.data.results));
  } catch (e: any) {
    dispatch(gameSlice.actions.gamesFetchingError(e.message));
  }
};
