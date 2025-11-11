import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve([])
        } as unknown as Response)
      )
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders header logo', async () => {
    await act(async () => {
      render(<App />);
    });
    const logo = await screen.findByAltText(/Han/i);
    expect(logo).toBeInTheDocument();
  });
});
