import 'react-native';
import React from 'react';
import App from './App';
import { render } from '@testing-library/react-native';

test('renders correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello, Bitrise!')).toBeTruthy();
});

