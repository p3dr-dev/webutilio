import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordGenerator from '../PasswordGenerator';
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

describe('PasswordGenerator', () => {
  it('renders without crashing with lang="en"', () => {
    renderWithToast(<PasswordGenerator lang="en" />);
    expect(screen.getByLabelText(/length/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument();
  });

  it('shows placeholder when no password generated', () => {
    renderWithToast(<PasswordGenerator lang="en" />);
    const input = screen.getByLabelText(/generated password/i) as HTMLInputElement;
    expect(input.value).toBe('');
    expect(input.getAttribute('placeholder')).toBeTruthy();
  });

  it('generates password of correct length', () => {
    renderWithToast(<PasswordGenerator lang="en" />);
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    const input = screen.getByLabelText(/generated password/i) as HTMLInputElement;
    // Default length is 16
    expect(input.value).toHaveLength(16);
  });

  it('password contains characters from enabled character sets', () => {
    renderWithToast(<PasswordGenerator lang="en" />);
    // Ensure all character sets are enabled (default state)
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach((cb) => {
      expect((cb as HTMLInputElement).checked).toBe(true);
    });
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    const password = (screen.getByLabelText(/generated password/i) as HTMLInputElement).value;
    // With all sets enabled, password should have mixed character types
    // Use multiple attempts since random is involved
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    // At least 2 of 3 character types should be present
    const typesPresent = [hasLower, hasUpper, hasDigit].filter(Boolean).length;
    expect(typesPresent).toBeGreaterThanOrEqual(2);
  });

  it('length slider changes password length', () => {
    renderWithToast(<PasswordGenerator lang="en" />);
    const slider = screen.getByLabelText(/length/i) as HTMLInputElement;
    fireEvent.change(slider, { target: { value: '32' } });
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    const password = (screen.getByLabelText(/generated password/i) as HTMLInputElement).value;
    expect(password).toHaveLength(32);
  });

  it('checkboxes toggle character sets', () => {
    renderWithToast(<PasswordGenerator lang="en" />);
    const uppercaseCheckbox = screen.getByLabelText(/uppercase/i);
    // Uncheck uppercase
    fireEvent.click(uppercaseCheckbox);
    expect((uppercaseCheckbox as HTMLInputElement).checked).toBe(false);
    // Re-check uppercase
    fireEvent.click(uppercaseCheckbox);
    expect((uppercaseCheckbox as HTMLInputElement).checked).toBe(true);
  });
});
