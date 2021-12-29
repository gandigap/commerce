import React, { useCallback, useEffect, useState } from 'react';
import {
  ThemeSwitcherContainer,
  ThemeSwitcherLabel,
  ThemeSwitcherInput,
  ThemeSwitcherIcon,
} from './ThemeSwitcherStyledComponents';

const ThemeSwitcher = () => {
  const [isChecked, setChecked] = useState(false);
  const setDarkTheme = useCallback(() => {
    localStorage.setItem('theme', 'active');
    document.documentElement.setAttribute('data-theme', 'dark');
    setChecked(!isChecked);
  }, [isChecked]);

  const setLigthTheme = useCallback(() => {
    localStorage.removeItem('theme');
    document.documentElement.setAttribute('data-theme', 'ligth');
    setChecked(!isChecked);
  }, [isChecked]);

  const switcherHandler = useCallback(
    (e) => {
      e.target.checked ? setDarkTheme() : setLigthTheme();
    },
    [setDarkTheme, setLigthTheme],
  );
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setChecked(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <ThemeSwitcherContainer>
      <ThemeSwitcherLabel className="switch" htmlFor="checkbox">
        <ThemeSwitcherInput
          type="checkbox"
          id="checkbox"
          onChange={switcherHandler}
          checked={isChecked}
        />
        <ThemeSwitcherIcon className="switch__icon"></ThemeSwitcherIcon>
      </ThemeSwitcherLabel>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
