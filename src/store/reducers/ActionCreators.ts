import axios from 'axios';
import { ITotalData } from 'interfaces/dataInterfaces';
import { IGamePrimary, IGames } from 'interfaces/gameInterfaces';
import { AppDispatch } from 'store/store';
import { dataSlice } from './DataSlice';
import { gameSlice } from './GameSlice';

export const fetchGames = () => async (dispatch: AppDispatch) => {
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

export const fetchDataByCategory =
  (category: string, pageNumber: number, pageSizeNumber: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(dataSlice.actions.dataFetching());
      const response = await axios.get<ITotalData>(`https://api.rawg.io/api/${category}?`, {
        params: {
          key: 'dc31c2a55aa444959f74eb7bc96b0617',
          page: pageNumber,
          page_size: pageSizeNumber,
        },
      });
      console.log(response.data, 'data');
      dispatch(dataSlice.actions.dataFetchingSuccess(response.data.results));
    } catch (e: any) {
      dispatch(dataSlice.actions.dataFetchingError(e.message));
    }
  };

export const fetchGame = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(gameSlice.actions.gamesFetching());
    const response = await axios.get<IGamePrimary>(`https://api.rawg.io/api/games/${id}?`, {
      params: {
        key: 'dc31c2a55aa444959f74eb7bc96b0617',
      },
    });
    console.log(response.data, 'data');
    dispatch(gameSlice.actions.gameFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(gameSlice.actions.gamesFetchingError(e.message));
  }
};
