import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { IData } from 'interfaces/dataInterfaces';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchGamesByParams } from 'store/reducers/ActionCreators';

type Props = {
  info: IData;
  category: string;
};

const GameAsideItem: React.FC<Props> = ({ info, category }) => {
  const { pageSizeNumber, pageNumber } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();

  const handlerClick = useCallback(() => {
    dispatch(fetchGamesByParams(category, info.slug, pageNumber, pageSizeNumber));
  }, [category, dispatch, info.slug, pageNumber, pageSizeNumber]);

  return (
    <Link to={`/${category}/${category === 'stores' ? info.id : info.slug}`} onClick={handlerClick}>
      <div className={`gameAside__${category}`}>{info.name.toLowerCase()}</div>
    </Link>
  );
};

export default GameAsideItem;
