import ErrorBoundary from '@components/ErrorBoundary';
import Footer from '@layouts/footer';
import Header from '@layouts/header';
import Main from '@layouts/main';
import { useSelectedMovie } from '@store/moviesSlice';
import { useToggleTheme } from '@store/themeSlice/hooks';
import React, { useEffect } from 'react';
import ModalDialogMovie from '@layouts/modalDialogMovie';

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
