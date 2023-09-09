import './style.css';
import React, { useEffect } from 'react';
import Header from '@src/layouts/header';
import Main from '@src/layouts/main';
import Footer from '@src/layouts/footer';
import ModalDialogMovie from '@src/layouts/modal-dialog-movie';
import { useToggleTheme } from '@store/themeSlice';
import { useSelectedMovie } from '@store/moviesSlice';

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
      {Object.keys(selectedMovie).length !== 0 && <ModalDialogMovie />}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
