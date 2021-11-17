import React, { useCallback } from 'react';
import {
  ThemeSwitcherContainer,
  ThemeSwitcherLabel,
  ThemeSwitcherInput,
  ThemeSwitcherIcon,
} from './ThemeSwitcherStyledComponents';

const ThemeSwitcher = () => {
  const switcherHandler = useCallback((e) => {
    e.target.checked
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'ligth');
  }, []);

  return (
    <ThemeSwitcherContainer>
      <ThemeSwitcherLabel className="switch" htmlFor="checkbox">
        <ThemeSwitcherInput type="checkbox" id="checkbox" onChange={switcherHandler} />
        <ThemeSwitcherIcon className="switch__icon"></ThemeSwitcherIcon>
      </ThemeSwitcherLabel>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
