import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchDataByCategory } from 'store/reducers/ActionCreators';
import PageTitleContainer from 'components/sectionTitle/SectionTitle';
import { IData } from 'interfaces/dataInterfaces';
import DataCard from './dataCard/DataCard';
import Pagination from 'components/pagination/Pagination';
import Spinner from 'components/spinner/Spinner';

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
    dispatch(fetchDataByCategory(path.slice(1), pageNumber, pageSizeNumber));
  }, [dispatch, pageNumber, pageSizeNumber, path]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <PageTitleContainer />
      <DataListContainer>
        {data.map((dataInfo: IData) => (
          <DataCard key={dataInfo.id} info={dataInfo} />
        ))}
      </DataListContainer>
      <Pagination type={`data`} path={path} />
    </>
  );
};

export default DataList;
