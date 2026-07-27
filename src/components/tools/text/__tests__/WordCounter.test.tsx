import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import WordCounter from '../WordCounter';

// Mock navigator.clipboard
beforeEach(() => {
  const mockWriteText = vi.fn().mockResolvedValue(undefined);
  Object.assign(navigator, {
    clipboard: {
      writeText: mockWriteText,
    },
  });
});

describe('WordCounter', () => {
  it('renders without crashing with lang="en"', () => {
    render(<WordCounter lang="en" />);
    const textarea = screen.getByPlaceholderText(/paste your text/i);
    expect(textarea).toBeInTheDocument();
  });

  it('shows zero counts for empty text', () => {
    render(<WordCounter lang="en" />);
    const wordsElements = screen.getAllByText('0');
    expect(wordsElements.length).toBeGreaterThanOrEqual(4);
  });

  it('counts words correctly when text is typed', () => {
    render(<WordCounter lang="en" />);
    const textarea = screen.getByPlaceholderText(/paste your text/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'hello world test' } });
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('counts characters correctly', () => {
    render(<WordCounter lang="en" />);
    const textarea = screen.getByPlaceholderText(/paste your text/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'abc' } });
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('counts sentences correctly', () => {
    render(<WordCounter lang="en" />);
    const textarea = screen.getByPlaceholderText(/paste your text/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Hello world.' } });
    // Find the stat card that has "Sentences" label and verify its value is 1
    const sentencesLabel = screen.getByText('Sentences');
    const sentencesCard = sentencesLabel.closest('div');
    expect(sentencesCard).toHaveTextContent('1');
  });

  it('shows copy and clear buttons when text is present', () => {
    render(<WordCounter lang="en" />);
    const textarea = screen.getByPlaceholderText(/paste your text/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'some text' } });
    expect(screen.getByText(/copy/i)).toBeInTheDocument();
    expect(screen.getByText(/clear/i)).toBeInTheDocument();
  });

  it('clear button resets text to empty', () => {
    render(<WordCounter lang="en" />);
    const textarea = screen.getByPlaceholderText(/paste your text/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'some text' } });
    const clearBtn = screen.getByText(/clear/i);
    fireEvent.click(clearBtn);
    expect((textarea as HTMLTextAreaElement).value).toBe('');
  });
});
