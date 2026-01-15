import React from 'react';
import { useTranslations } from '../i18n/utils';

interface DonationOptionsProps {
  lang: 'pt' | 'en';
}

const DonationOptions: React.FC<DonationOptionsProps> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Opção 1: PIX (Mais popular no Brasil) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">{t('donation.title')}</h3>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          {t('donation.description')}
        </p>
        <div className="flex justify-center">
          {/* Substitua pelo caminho do seu QR Code na pasta 'public' */}
          <img 
            src="/static/images/pix-qrcode.png" 
            alt="QR Code Pix" 
            className="w-56 h-56 p-2 bg-white rounded-md shadow-inner" 
          />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          {t('donation.orKey')} <br/>
          <span className="font-mono bg-gray-100 dark:bg-gray-700 p-1 rounded">
            {/* SUBSTITUA PELA SUA CHAVE PIX */}
            fe17002f-fd15-4a76-be58-b1bf811f799f
          </span>
        </p>
      </div>
    </div>
  );
};

export default DonationOptions;
