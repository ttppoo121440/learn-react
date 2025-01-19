import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import App from '../App';

test('demo', () => {
  expect(true).toBe(true);
});

test('呈現主頁', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
