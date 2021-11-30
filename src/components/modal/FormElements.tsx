import styled from 'styled-components';
export const ModalOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-2);
  z-index: 3;
`;

export const ModalContentContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: var(--color-4);
  box-shadow: 0px 0px 10px 5px var(--color-3);
  -webkit-box-shadow: 0px 0px 10px 5px var(--color-3);
  -moz-box-shadow: 0px 0px 10px 5px var(--color-3);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: var(--color-3);
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  color: var(--color-5);
`;

export const ModalInputListContainer = styled.div`
  flex-grow: 1;
`;
export const ModalInputContainer = styled.div`
  padding: 5px;
  margin: 5px;
`;

export const ModalInput = styled.input`
  padding: 5px;
  font-size: 16px;
`;

export const ModalLabel = styled.label`
  min-width: 150px;
  display: inline-block;
  font-size: 24px;
  color: var(--color-5);
`;

export const ModalWrapperButton = styled.div`
  display: flex;
  justify-content: end;
`;
