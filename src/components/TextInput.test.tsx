import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

test('TextInput Component test', async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const textEl = screen.getByText('Entered Text:');
  expect(textEl).toBeInTheDocument();

  const inputEl = screen.getByLabelText('Text Input');
  await user.type(inputEl, 'Hello World!');
  expect(screen.getByText('Entered Text:Hello World!')).toBeInTheDocument();
});
