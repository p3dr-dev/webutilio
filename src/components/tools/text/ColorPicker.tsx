import React, { useState, useCallback } from 'react';
import { useTranslations } from '../../../i18n/utils';
import type { Language } from "../../../data/tools";
import { useToast } from '../../Toast';

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = hex.replace('#', '').match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return null;
  return { r: parseInt(match[1], 16), g: parseInt(match[2], 16), b: parseInt(match[3], 16) };
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

const ColorPicker: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [hex, setHex] = useState('#6b21a8');
  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast(t('components.colorPicker.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  const handleHexChange = useCallback((value: string) => {
    const clean = value.startsWith('#') ? value : `#${value}`;
    setHex(clean);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <input
            type="color"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            className="w-32 h-32 rounded-lg cursor-pointer border-2 border-gray-200 dark:border-gray-600"
            aria-label={t('components.colorPicker.pickerLabel')}
          />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">HEX</span>
            <input
              id="color-hex"
              type="text"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md font-mono dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
            <button onClick={() => handleCopy(hex)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">📋</button>
          </div>

          {rgb && (
            <>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">RGB</span>
                <input
                  id="color-rgb"
                  type="text"
                  readOnly
                  value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
                  className="flex-1 p-2 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
                <button onClick={() => handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">📋</button>
              </div>

              {hsl && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">HSL</span>
                  <input
                    id="color-hsl"
                    type="text"
                    readOnly
                    value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}
                    className="flex-1 p-2 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                  <button onClick={() => handleCopy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">📋</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg border border-gray-200 dark:border-gray-600" style={{ backgroundColor: hex }}>
        <p className="text-center font-bold" style={{ color: hsl && hsl.l > 50 ? '#000' : '#fff' }}>
          {t('components.colorPicker.preview')}
        </p>
      </div>
    </div>
  );
};

export default ColorPicker;
