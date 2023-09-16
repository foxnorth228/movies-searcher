import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import ModalDialogMovie from '@src/layouts/modal-dialog-movie';
import renderWithStore from '@utils/renderWithStore';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<ModalDialogMovie />);
});
