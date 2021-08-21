import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components/native';
import { DrinkProvider } from './drinks';

interface AppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProvider): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <DrinkProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </DrinkProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
