import '@testing-library/jest-dom';

import ModalDialogMovie from '@src/layouts/modal-dialog-movie';
import { cleanup } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<ModalDialogMovie />);
});
