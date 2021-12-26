import styled from 'styled-components';

export const WishListContainer = styled.div`
  width: 60%;
  min-width: 300px;
  margin: 50px auto;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 10px 0px var(--color-4);
  box-shadow: 0px 0px 10px 0px var(--color-4);
`;

export const WishListTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const WishListTable = styled.table`
  margin: 20px auto;
`;

export const WishListTbody = styled.tbody`
  border-radius: 50%;
  background-color: var(--color-3);
`;

export const WishListTableRow = styled.tr`
  border-bottom: 3px solid var(--color-1);
`;

export const WishListTableCell = styled.td`
  padding: 5px;
`;

export const WishListButtonDeleteGame = styled.button`
  cursor: pointer;
  &:hover {
    background-color: var(--color-5);
    color: var(--color-1);
  }
`;

export const WishListResultContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

export const WishListResultTitle = styled.div`
  color: var(--color-4);
  font-size: 24px;
  font-style: italic;
`;

export const WishListResultButton = styled.button`
  margin 10px;
  padding:5px 10px;
  font-size:16px;  
  border-radius:11px;
  cursor:pointer;
  background-color: var(--color-1);
  color: var(--color-info);
  transition:0.3s;

  &:hover {
    color: var(--color-4);
  }

  &:active {
    border-style: ridge;
    transform:scale(0.9);
  }
`;
