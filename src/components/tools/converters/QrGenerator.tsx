import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

const QrGenerator: React.FC<{ lang: 'pt' | 'en' | 'es' | 'fr' | 'de' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [text, setText] = useState('');
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  useEffect(() => {
    if (text) {
      void generateQr();
    } else {
      setQrUrl(null);
    }
  }, [text]);

  const generateQr = async () => {
    try {
      const url = await QRCode.toDataURL(text, {
        width: 1024,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      });
      setQrUrl(url);
    } catch {
      setQrUrl(null);
      showToast(t('components.qrGenerator.error'), 'error');
    }
  };

  const handleDownload = () => {
    if (!qrUrl) return;
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = 'qrcode.png';
    link.click();
    showToast(t('components.qrGenerator.download'), 'success');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 text-center">
      <label htmlFor="qr-input" className="sr-only">{t('components.qrGenerator.placeholder')}</label>
      <input
        id="qr-input"
        type="text"
        className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 transition-shadow dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
        placeholder={t('components.qrGenerator.placeholder')}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-8 flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-inner dark:bg-gray-200 min-h-[200px] min-w-[200px] flex items-center justify-center">
          {qrUrl ? (
            <img src={qrUrl} alt="QR Code" className="w-64 h-64" />
          ) : (
            <div className="text-gray-400">{t('components.qrGenerator.preview')}</div>
          )}
        </div>

        {qrUrl && (
          <button
            onClick={handleDownload}
            className="mt-6 bg-purple-600 text-white font-bold py-2 px-8 rounded-md hover:bg-purple-700 transition-colors"
          >
            {t('components.qrGenerator.download')}
          </button>
        )}
      </div>
    </div>
  );
};

export default QrGenerator;
