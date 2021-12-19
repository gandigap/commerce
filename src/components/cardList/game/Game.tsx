import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { useParams } from 'react-router-dom';

import { fetchGame } from 'store/reducers/ActionCreators';

import styled from 'styled-components';
import GameAside from './GameAside';

const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GameTitle = styled.h2`
  padding-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

const GameMainInfo = styled.div`
  width: 60%;
  min-width: 500px;
`;
const GameAdditionalInfo = styled.div`
  width: 35%;
  min-width: 300px;
`;

const GameDescription = styled.div`
  text-align: justify;
  font-style: italic;
  font-size: 18px;
`;

const GameImageContainer = styled.figure`
  margin: 10px;
  box-shadow: 0px 0px 10px 5px var(--color-5);
`;
const GameImage = styled.img`
  width: 100%;
`;

const Game = () => {
  const { downloadGames } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (slug && !downloadGames[slug]) {
      if (slug) {
        dispatch(fetchGame(slug));
      }
    }
  }, [dispatch, downloadGames, slug]);

  return (
    <>
      {slug && downloadGames[slug] ? (
        <>
          <GameTitle>{downloadGames[slug].name}</GameTitle>
          <GameContainer>
            <GameMainInfo>
              <GameImageContainer>
                <GameImage src={downloadGames[slug].background_image}></GameImage>
              </GameImageContainer>
              <GameDescription>{downloadGames[slug].description_raw}</GameDescription>
            </GameMainInfo>
            <GameAdditionalInfo>
              <GameAside title={'tags'} tags={downloadGames[slug].tags} />
              <GameAside title={'developers'} developers={downloadGames[slug].developers} />
              <GameAside title={'stores'} stores={downloadGames[slug].stores} />
            </GameAdditionalInfo>
          </GameContainer>
        </>
      ) : (
        <p>Game not found</p>
      )}
    </>
  );
};
export default Game;
