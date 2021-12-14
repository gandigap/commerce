import axios from 'axios';
import { IFetchData } from 'interfaces/dataInterfaces';
import { IFetchGames, IGamePrimary } from 'interfaces/gameInterfaces';
import { AppDispatch } from 'store/store';
import { dataSlice } from './DataSlice';
import { gameSlice } from './GameSlice';
import { searchSlice } from './SearchSlice';

export const fetchGames = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(gameSlice.actions.gamesFetching());
    const response = await axios.get<IFetchGames>(`https://api.rawg.io/api/games?`, {
      params: {
        key: 'dc31c2a55aa444959f74eb7bc96b0617',
        page: 1,
        page_size: 30,
      },
    });
    dispatch(gameSlice.actions.gamesFetchingSuccess(response.data.results));
  } catch (e: any) {
    dispatch(gameSlice.actions.gamesFetchingError(e.message));
  }
};

export const fetchGamesByParams =
  (category: string, value: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(gameSlice.actions.gamesFetching());
      const response = await axios.get<IFetchGames>(
        `https://api.rawg.io/api/games?${category}=${value}`,
        {
          params: {
            key: 'dc31c2a55aa444959f74eb7bc96b0617',
            page: 1,
            page_size: 30,
          },
        },
      );
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
      const response = await axios.get<IFetchData>(`https://api.rawg.io/api/${category}?`, {
        params: {
          key: 'dc31c2a55aa444959f74eb7bc96b0617',
          page: pageNumber,
          page_size: pageSizeNumber,
        },
      });
      dispatch(dataSlice.actions.dataFetchingSuccess(response.data.results));
    } catch (e: any) {
      dispatch(dataSlice.actions.dataFetchingError(e.message));
    }
  };

export const fetchGame = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(gameSlice.actions.gamesFetching());
    const response = await axios.get<IGamePrimary>(`https://api.rawg.io/api/games/${slug}?`, {
      params: {
        key: 'dc31c2a55aa444959f74eb7bc96b0617',
      },
    });
    dispatch(gameSlice.actions.gameFetchingSuccess(response.data));
    dispatch(gameSlice.actions.setCurrentGameId(response.data.id));
  } catch (e: any) {
    dispatch(gameSlice.actions.gamesFetchingError(e.message));
  }
};

export const fetchSearchGame = (title: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(searchSlice.actions.searchFetching());
    const response = await axios.get<IFetchGames>(`https://api.rawg.io/api/games?`, {
      params: {
        key: 'dc31c2a55aa444959f74eb7bc96b0617',
        page: 1,
        page_size: 30,
        search: title,
      },
    });
    dispatch(searchSlice.actions.searchFetchingSuccess(response.data.results));
  } catch (e: any) {
    dispatch(searchSlice.actions.searchFetchingError(e.message));
  }
};
