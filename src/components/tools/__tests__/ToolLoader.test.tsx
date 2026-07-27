import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

// Mock the lazy-loaded tool components
vi.mock('../text/WordCounter', () => ({
  default: (props: { lang: string }) => <div data-testid="word-counter">WordCounter {props.lang}</div>,
}));

vi.mock('../text/HashGenerator', () => ({
  default: () => <div>HashGenerator</div>,
}));
vi.mock('../media/MediaCompressor', () => ({
  default: () => <div>MediaCompressor</div>,
}));
vi.mock('../files/FileEncryptor', () => ({
  default: () => <div>FileEncryptor</div>,
}));
vi.mock('../converters/FileConverter', () => ({
  default: () => <div>FileConverter</div>,
}));
vi.mock('../files/FileCompressor', () => ({
  default: () => <div>FileCompressor</div>,
}));
vi.mock('../files/FileDecompressor', () => ({
  default: () => <div>FileDecompressor</div>,
}));
vi.mock('../images/BackgroundRemover', () => ({
  default: () => <div>BackgroundRemover</div>,
}));
vi.mock('../images/ImageResizer', () => ({
  default: () => <div>ImageResizer</div>,
}));
vi.mock('../text/JsonFormatter', () => ({
  default: () => <div>JsonFormatter</div>,
}));
vi.mock('../converters/QrGenerator', () => ({
  default: () => <div>QrGenerator</div>,
}));
vi.mock('../images/ExifExtractor', () => ({
  default: () => <div>ExifExtractor</div>,
}));
vi.mock('../text/PasswordGenerator', () => ({
  default: () => <div>PasswordGenerator</div>,
}));
vi.mock('../text/Base64Tool', () => ({
  default: () => <div>Base64Tool</div>,
}));
vi.mock('../text/UuidGenerator', () => ({
  default: () => <div>UuidGenerator</div>,
}));
vi.mock('../text/TimestampConverter', () => ({
  default: () => <div>TimestampConverter</div>,
}));
vi.mock('../text/LoremGenerator', () => ({
  default: () => <div>LoremGenerator</div>,
}));
vi.mock('../text/CaseConverter', () => ({
  default: () => <div>CaseConverter</div>,
}));
vi.mock('../text/ColorPicker', () => ({
  default: () => <div>ColorPicker</div>,
}));
vi.mock('../text/MarkdownPreview', () => ({
  default: () => <div>MarkdownPreview</div>,
}));

import ToolLoader from '../ToolLoader';

describe('ToolLoader', () => {
  it('renders tool component for valid tool ID', async () => {
    render(<ToolLoader toolId="word-counter" lang="en" />);
    await waitFor(() => {
      expect(screen.getByTestId('word-counter')).toBeInTheDocument();
    });
    expect(screen.getByText(/WordCounter en/)).toBeInTheDocument();
  });

  it('shows error for invalid tool ID', () => {
    render(<ToolLoader toolId="non-existent-tool" lang="en" />);
    expect(screen.getByText(/non-existent-tool/)).toBeInTheDocument();
  });

  it('renders loading fallback for valid tool', async () => {
    const { container } = render(<ToolLoader toolId="password-generator" lang="en" />);
    // Immediately after render, Suspense should show the loading fallback
    // The loading fallback has animate-spin
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });
});
