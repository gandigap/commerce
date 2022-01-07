import React from 'react';

import { IData } from 'interfaces/dataInterfaces';

import styled from 'styled-components';
import GameAsideItem from './GameAsideItem';

const GameAsideContainer = styled.aside`  
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

  .gameAside__tags {
    padding: 3px;
    border-radius: 10px;
    background-color: var(--color-4);
    color: var(--color-1);

    &:hover {
      color: var(--color-5);
      background-color: var(--color-3);
    }
  }

  .gameAside__stores {
    padding: 5px;
    border: 1px solid var(--color-5);
    color: var(--color-5);
    background-color: var(--color-1);

    &:hover {
      color: var(--color-4);
    }
  }

  .gameAside__developers {
    text-decoration: underline;
    color: var(--color-5);

    &:hover {
      color: var(--color-4);
    }
  }
`;

interface IGameAside {
  title: string;
  tags?: IData[];
  publishers?: IData[];
  developers?: IData[];
  stores?: { id: number; store: IData }[];
}

const GameAside: React.FC<IGameAside> = ({ title, tags, publishers, developers, stores }) => {
  return (
    <GameAsideContainer>
      <GameAsideTitle>{title.toUpperCase()}</GameAsideTitle>
      <GameAsideContent>
        {tags &&
          tags.map((tag) => {
            return <GameAsideItem key={tag.name} info={tag} category={title} />;
          })}
        {developers &&
          developers.map((developer) => {
            return <GameAsideItem key={developer.name} info={developer} category={title} />;
          })}
        {stores &&
          stores.map((store) => {
            return <GameAsideItem key={store.id} info={store.store} category={title} />;
          })}
      </GameAsideContent>
    </GameAsideContainer>
  );
};

export default GameAside;
