export const pseudoSeparator = () => {
  return `
  position: absolute;
  right: 20px;
  top: 10px;
  content: '';
  height: 2px;
  width: 40px;
  background-color: var(--color-5);
  `;
};

export const buttonFormAndCard = () => {
  return `
  font-size:16px;
  padding: 5px;  
  align-self: center;
  color: var(--color-5);
  background-color: var(--color-3);
  border: 1px solid var(--color-1);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--color-5);
    background-color: var(--color-2);
    border: 1px solid var(--color-5);
  }

  &:active {
    box-shadow: 0px 0px 3px 0px var(--color-5) inset;
    border: 1px solid var(--color-1);
  }
  `;
};

export const headerAndFormLink = () => {
  return `
    position: relative;
    color: var(--color-5);
    text-decoration: none;
    margin: 0 10px;
  `;
};

export const headerAndFormLinkHover = () => {
  return `
    color: var(--color-4);
  `;
};
