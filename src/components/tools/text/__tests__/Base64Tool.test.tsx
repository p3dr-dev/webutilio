import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Base64Tool from '../Base64Tool';
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

describe('Base64Tool', () => {
  it('renders without crashing with lang="en"', () => {
    renderWithToast(<Base64Tool lang="en" />);
    expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
    // Both the mode toggle "Encode" and the action button "Encode to Base64" exist
    const encodeButtons = screen.getAllByRole('button', { name: /encode/i });
    expect(encodeButtons.length).toBeGreaterThanOrEqual(2);
  });

  it('encodes text to base64 correctly', () => {
    renderWithToast(<Base64Tool lang="en" />);
    const textarea = screen.getByPlaceholderText(/enter text/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Hello' } });
    // Click the action button (not the mode toggle) — it's the one with "Encode to Base64"
    const processBtn = screen.getByRole('button', { name: /encode to base64/i });
    fireEvent.click(processBtn);
    expect(screen.getByText('SGVsbG8=')).toBeInTheDocument();
  });

  it('decodes base64 to text correctly', () => {
    renderWithToast(<Base64Tool lang="en" />);
    // Switch to decode mode via the toggle button (exact text "Decode")
    const decodeToggle = screen.getByRole('button', { name: /^decode$/i });
    fireEvent.click(decodeToggle);
    const textarea = screen.getByPlaceholderText(/enter base64/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'SGVsbG8=' } });
    // Click the action button (now "Decode from Base64")
    const processBtn = screen.getByRole('button', { name: /decode from base64/i });
    fireEvent.click(processBtn);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('mode toggle switches between encode/decode', () => {
    renderWithToast(<Base64Tool lang="en" />);
    const decodeToggle = screen.getByRole('button', { name: /^decode$/i });
    fireEvent.click(decodeToggle);
    // The decode toggle should now have the active styling (bg-purple-600)
    expect(decodeToggle.className).toContain('bg-purple-600');
    const encodeToggle = screen.getByRole('button', { name: /^encode$/i });
    expect(encodeToggle.className).not.toContain('bg-purple-600');
  });

  it('shows error toast for invalid decode input', () => {
    renderWithToast(<Base64Tool lang="en" />);
    // Switch to decode mode
    const decodeToggle = screen.getByRole('button', { name: /^decode$/i });
    fireEvent.click(decodeToggle);
    const textarea = screen.getByPlaceholderText(/enter base64/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: '!!!invalid-base64!!!' } });
    const processBtn = screen.getByRole('button', { name: /decode from base64/i });
    fireEvent.click(processBtn);
    // Toast should appear with error message
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
