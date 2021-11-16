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
  border-radius: 1em;
`;

export const ThemeSwitcherInput = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + .switch__icon {
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    background: var(--color-1);
  }
`;

export const ThemeSwitcherIcon = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background-color: var(--color-1);
  box-shadow: 0 0.1em 0.3em var(--color-5);
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  transition: all 300ms;
  cursor: pointer;
`;
