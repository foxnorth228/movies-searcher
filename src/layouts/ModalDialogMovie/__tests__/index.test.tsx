import '@testing-library/jest-dom';

import ModalDialogMovie from '@layouts/ModalDialogMovie';
import { cleanup } from '@testing-library/react';
import renderWithStore from '@utils/renderWithStore';
import React from 'react';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<ModalDialogMovie />);
});
