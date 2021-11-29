import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

export const ThemeSwitcherContainer = styled.div`
  width: 40px;
  margin: 10px;
`;

export const ThemeSwitcherLabel = styled.label`
  height: 20px;
  width: 40px;
  display: inline-block;
  font-size: 20px;
  background-color: var(--color-4);
  border-radius: 10px;
  cursor: pointer;
`;

export const ThemeSwitcherInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;

  &:checked + .switch__icon {
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    background: var(--color-5);
  }
`;

export const ThemeSwitcherIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: var(--color-5);
  box-shadow: 0px 0px 3px 2px var(--color-5);
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  transition: all 300ms;
`;
