import ErrorBoundary from '@components/ErrorBoundary';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import Main from '@layouts/Main';
import ModalDialogMovie from '@layouts/ModalDialogMovie';
import { useSelectedMovie } from '@store/moviesSlice';
import { useToggleTheme } from '@store/themeSlice/hooks';
import React, { useEffect } from 'react';

import * as styled from './styled';

const App = () => {
  const [theme] = useToggleTheme();
  const [selectedMovie] = useSelectedMovie();
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  return (
    <>
      <styled.globalStyle />
      <ErrorBoundary>
        {Object.keys(selectedMovie).length !== 0 && <ModalDialogMovie />}
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
