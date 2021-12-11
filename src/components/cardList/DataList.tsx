import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchDataByCategory } from 'store/reducers/ActionCreators';
import PageTitleContainer from 'components/sectionTitle/SectionTitle';
import { IData } from 'interfaces/dataInterfaces';
import DataCard from './dataCard/DataCard';

import styled from 'styled-components';

const DataListContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DataList = () => {
  const { data, isLoading, error } = useAppSelector((state) => state.dataReducer);
  const { pageNumber, pageSizeNumber } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const path = useLocation().pathname;

  useEffect(() => {
    data.length === 0 && dispatch(fetchDataByCategory(path.slice(1), pageNumber, pageSizeNumber));
  }, [data.length, dispatch, pageNumber, pageSizeNumber, path]);
  console.log(path.slice(1), 'slice');
  return (
    <>
      <PageTitleContainer />
      <DataListContainer>
        {isLoading && <h3>Идет загрузка</h3>}
        {error && <h3>{error}</h3>}
        {data.map((dataInfo: IData) => (
          <DataCard key={dataInfo.id} info={dataInfo} />
        ))}
      </DataListContainer>
    </>
  );
};

export default DataList;
