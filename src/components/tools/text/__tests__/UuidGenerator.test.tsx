import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UuidGenerator from '../UuidGenerator';
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

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('UuidGenerator', () => {
  it('renders without crashing with lang="en"', () => {
    renderWithToast(<UuidGenerator lang="en" />);
    expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument();
  });

  it('generates UUID on button click', () => {
    renderWithToast(<UuidGenerator lang="en" />);
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    const uuidElement = screen.getByText(UUID_V4_REGEX);
    expect(uuidElement).toBeInTheDocument();
  });

  it('UUID matches v4 format', () => {
    renderWithToast(<UuidGenerator lang="en" />);
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    const uuidElement = screen.getByText(UUID_V4_REGEX);
    expect(uuidElement.textContent).toMatch(UUID_V4_REGEX);
  });

  it('count input controls number of UUIDs generated', () => {
    renderWithToast(<UuidGenerator lang="en" />);
    const countInput = screen.getByLabelText(/quantity/i) as HTMLInputElement;
    fireEvent.change(countInput, { target: { value: '5' } });
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    const uuidElements = screen.getAllByText(UUID_V4_REGEX);
    expect(uuidElements).toHaveLength(5);
  });

  it('uppercase checkbox works', () => {
    renderWithToast(<UuidGenerator lang="en" />);
    const uppercaseCheckbox = screen.getByLabelText(/uppercase/i);
    fireEvent.click(uppercaseCheckbox);
    expect((uppercaseCheckbox as HTMLInputElement).checked).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    const uuidElement = screen.getByText(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/);
    expect(uuidElement).toBeInTheDocument();
  });
});
