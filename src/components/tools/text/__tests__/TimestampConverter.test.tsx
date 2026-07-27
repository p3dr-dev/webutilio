import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TimestampConverter from '../TimestampConverter';
import { ToastProvider } from '../../../Toast';

function renderWithToast(ui: React.ReactElement) {
  return render(<ToastProvider>{ui}</ToastProvider>);
}

beforeEach(() => {
  const mockWriteText = vi.fn().mockResolvedValue(undefined);
  Object.assign(navigator, {
    clipboard: {
      writeText: mockWriteText,
    },
  });
});

describe('TimestampConverter', () => {
  it('renders without crashing with lang="en"', () => {
    renderWithToast(<TimestampConverter lang="en" />);
    expect(screen.getByText(/current unix timestamp/i)).toBeInTheDocument();
  });

  it('shows current timestamp', () => {
    renderWithToast(<TimestampConverter lang="en" />);
    const now = Math.floor(Date.now() / 1000);
    const timestampText = screen.getByText(/^\d{10}$/);
    const displayed = Number(timestampText.textContent);
    expect(Math.abs(displayed - now)).toBeLessThan(2);
  });

  it('converts timestamp to date', () => {
    renderWithToast(<TimestampConverter lang="en" />);
    const timestampInput = screen.getByRole('spinbutton');
    // 1609459200 = 2021-01-01T00:00:00.000Z
    fireEvent.change(timestampInput, { target: { value: '1609459200' } });
    const buttons = screen.getAllByRole('button', { name: '→' });
    fireEvent.click(buttons[0]);
    expect(screen.getByText('2021-01-01T00:00:00.000Z')).toBeInTheDocument();
  });

  it('converts date to timestamp', () => {
    renderWithToast(<TimestampConverter lang="en" />);
    const dateInput = document.querySelector('input[type="datetime-local"]') as HTMLInputElement;
    // Set the date using native setter to trigger React's change handling
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    )?.set;
    nativeInputValueSetter?.call(dateInput, '2021-01-01T00:00');
    fireEvent.change(dateInput);
    // Click the second arrow button (date to timestamp)
    const buttons = screen.getAllByRole('button', { name: '→' });
    fireEvent.click(buttons[1]);
    // The result is timezone-dependent, so verify a 10-digit number appeared
    const timestampResult = document.querySelector('code.text-sm.font-mono');
    expect(timestampResult).toBeTruthy();
    const value = timestampResult?.textContent;
    expect(value).toMatch(/^\d{10}$/);
    // Verify it's a reasonable timestamp (year 2020-2022 range)
    const num = Number(value);
    expect(num).toBeGreaterThan(1577836800); // 2020-01-01
    expect(num).toBeLessThan(1640995200);    // 2022-01-01
  });
});
