import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';
import ModalDialogMovie from '@layouts/modalDialogMovie';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<ModalDialogMovie />);
});
