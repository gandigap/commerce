import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { useParams } from 'react-router-dom';

import { gameSlice } from 'store/reducers/GameSlice';
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

const Game = () => {
  const { currentGameId, downloadGames } = useAppSelector((state) => state.gameReducer);
  const { setCurrentGameId } = gameSlice.actions;
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!downloadGames[currentGameId]) {
      if (id) {
        dispatch(setCurrentGameId(parseInt(id)));
        dispatch(fetchGame(parseInt(id)));
      }
    }
  }, [currentGameId, dispatch, downloadGames, id, setCurrentGameId]);

  return (
    <>
      {downloadGames[currentGameId] ? (
        <>
          <GameTitle>{downloadGames[currentGameId].name}</GameTitle>
          <GameContainer>
            <GameMainInfo>
              <GameDescription>{downloadGames[currentGameId].description_raw}</GameDescription>
            </GameMainInfo>
            <GameAdditionalInfo>
              <GameAside title={'tags'} tags={downloadGames[currentGameId].tags} />
              <GameAside
                title={'developers'}
                developers={downloadGames[currentGameId].developers}
              />
              <GameAside title={'stores'} stores={downloadGames[currentGameId].stores} />
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
