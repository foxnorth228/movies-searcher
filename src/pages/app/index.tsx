import ErrorBoundary from '@components/ErrorBoundary';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import Main from '@layouts/Main';
import ModalDialogMovie from '@layouts/ModalDialogMovie';
import { useSelectedMovie } from '@store/moviesSlice';
import { useToggleTheme } from '@store/themeSlice/hooks';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import * as styled from './styled';

const App = () => {
  const [theme] = useToggleTheme();
  const [selectedMovie] = useSelectedMovie();
  return (
    <>
      <ThemeProvider theme={theme.value}>
        <styled.globalStyle />
        <ErrorBoundary>
          {Object.keys(selectedMovie).length !== 0 && <ModalDialogMovie />}
          <Header />
          <Main />
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default App;
