import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent } from '@testing-library/react';
import ModalDialogMovie from '@src/layouts/modal-dialog-movie';
import renderWithStore from '@utils/renderWithStore';
import { expect } from '@jest/globals';

afterEach(cleanup);

test('Logo test', () => {
  renderWithStore(<ModalDialogMovie />);
});
