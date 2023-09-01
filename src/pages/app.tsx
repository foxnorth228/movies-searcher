import React from 'react';
import Header from '@src/layouts/header';
import Main from '@src/layouts/main';
import Footer from '@src/layouts/footer';
import ModalDialogMovie from '@src/layouts/modal-dialog-movie';

const App = () => {
  return (
    <>
      {false && <ModalDialogMovie />}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
