import { IDataGeneral } from 'interfaces/dataInterfaces';
import React from 'react';

import styled from 'styled-components';
import GameDeveloper from './GameDeveloper';
import GameStores from './GameStores';
import GameTag from './GameTag';

const GameAsideContainer = styled.aside`
  min-width: 300px;
  padding-bottom: 20px;
`;

const GameAsideTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-info);
  padding-bottom: 5px;
`;

const GameAsideContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

interface IGameAside {
  title: string;
  tags?: IDataGeneral[];
  publishers?: IDataGeneral[];
  developers?: IDataGeneral[];
  stores?: { id: number; store: IDataGeneral }[];
}

const GameAside: React.FC<IGameAside> = ({ title, tags, publishers, developers, stores }) => {
  console.log(stores);
  return (
    <GameAsideContainer>
      <GameAsideTitle>{title.toUpperCase()}</GameAsideTitle>
      <GameAsideContent>
        {tags &&
          tags.map((tag) => {
            return <GameTag key={tag.name} tagInfo={tag} />;
          })}
        {developers &&
          developers.map((developer) => {
            return <GameDeveloper key={developer.name} developerInfo={developer} />;
          })}
        {stores &&
          stores.map((store) => {
            return <GameStores key={store.id} storeInfo={store.store} />;
          })}
      </GameAsideContent>
    </GameAsideContainer>
  );
};

export default GameAside;
