import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from '../i18n/utils';

interface DonationOptionsProps {
  lang: 'pt' | 'en' | 'es' | 'fr' | 'de' | 'ru';
}

// ----------------------------------------------------------------------
// CONFIGURATION - REPLACE WITH YOUR REAL DATA
// ----------------------------------------------------------------------
const DONATION_LINKS = {
  pixKey: 'fe17002f-fd15-4a76-be58-b1bf811f799f',
  paypal: 'https://www.paypal.com/donate/?business=VTA8G22Q4EM3N&no_recurring=0&currency_code=BRL',
  stripe: 'https://buy.stripe.com/dRm5kE9b8fUtdfifev04800',
  kofi: 'https://ko-fi.com/pedrosimoes',
  crypto: {
    btc: '15orMP86UUUNZQhGYbb3r6a4aZ2txHfFCw',
    eth: '0x47ab3586092d05416cea695b642effa836a51c25',
    usdt: 'TYV5RfNujifsVoLYtuBtqFQUgB6JcaBHzJ' // TRC20 usually starts with T
  }
};
// ----------------------------------------------------------------------

const DonationOptions: React.FC<DonationOptionsProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const [toastMessage, setToastMessage] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage(`${label} ${t('donation.copied')}`);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setToastMessage(''), 3000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 relative">
      {/* Inline Simple Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          {toastMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* COLUNA 1: PIX (Brasil Focus) */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-2xl mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
           <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t('donation.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{t('donation.description')}</p>
          
          <div className="bg-white p-2 rounded-xl shadow-inner border border-gray-200 mb-6">
            <img src="/static/images/pix_qrcode.png" alt={t('donation.qrCodeAlt')} className="w-48 h-48 rounded-lg" />
          </div>
          
          <div className="w-full relative">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block text-left pl-1">Pix Key</span>
            <div className="flex items-center justify-between w-full p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors group">
              <span className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate mr-2 select-all">
                {DONATION_LINKS.pixKey}
              </span>
              <span
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopy(DONATION_LINKS.pixKey, 'Pix'); }}
                className="text-gray-400 group-hover:text-green-500 transition-colors cursor-pointer shrink-0"
                aria-label={t('donation.copy')}
                onClick={() => handleCopy(DONATION_LINKS.pixKey, 'Pix')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </span>
            </div>
          </div>
        </div>

        {/* COLUNA 2: Internacional & Crypto */}
        <div className="space-y-6">
          
          {/* Global Methods */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
             <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t('donation.international')}</h2>
             </div>

             <div className="space-y-3">
                <a href={DONATION_LINKS.paypal} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-[#0070BA]/5 hover:bg-[#0070BA]/10 border border-transparent hover:border-[#0070BA]/30 transition-all group">
                   <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0070BA] font-bold text-xl mr-4 shadow-sm">P</span>
                   <div>
                      <div className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#0070BA] transition-colors">{t('donation.methods.paypal')}</div>
                      <div className="text-xs text-gray-500">{t('donation.descriptions.paypal')}</div>
                   </div>
                </a>

                <a href={DONATION_LINKS.kofi} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-[#FF5E5B]/5 hover:bg-[#FF5E5B]/10 border border-transparent hover:border-[#FF5E5B]/30 transition-all group">
                   <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#FF5E5B] font-bold text-lg mr-4 shadow-sm">☕</span>
                   <div>
                      <div className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#FF5E5B] transition-colors">{t('donation.methods.kofi')}</div>
                      <div className="text-xs text-gray-500">{t('donation.descriptions.kofi')}</div>
                   </div>
                </a>

                <a href={DONATION_LINKS.stripe} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-[#635BFF]/5 hover:bg-[#635BFF]/10 border border-transparent hover:border-[#635BFF]/30 transition-all group">
                   <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#635BFF] font-bold text-lg mr-4 shadow-sm">S</span>
                   <div>
                      <div className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#635BFF] transition-colors">{t('donation.methods.stripe')}</div>
                      <div className="text-xs text-gray-500">{t('donation.descriptions.stripe')}</div>
                   </div>
                </a>
             </div>
          </div>

          {/* Crypto Methods */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
             <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-xl">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t('donation.crypto')}</h2>
             </div>

             <div className="space-y-4">
                {[
                  { id: 'btc', label: t('donation.methods.btc'), addr: DONATION_LINKS.crypto.btc, color: 'text-orange-500' },
                  { id: 'eth', label: t('donation.methods.eth'), addr: DONATION_LINKS.crypto.eth, color: 'text-purple-500' },
                  { id: 'usdt', label: t('donation.methods.usdt'), addr: DONATION_LINKS.crypto.usdt, color: 'text-green-500' }
                ].map((coin) => (
                  <div key={coin.id} className="group">
                    <label className={`text-xs font-bold ${coin.color} uppercase tracking-wider mb-1 block pl-1`}>{coin.label}</label>
                    <div className="flex items-center justify-between w-full p-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 transition-all">
                      <span className="font-mono text-xs text-gray-600 dark:text-gray-400 truncate mr-2 select-all w-full">
                        {coin.addr}
                      </span>
                      <span
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopy(coin.addr, coin.label); }}
                        className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 cursor-pointer shrink-0"
                        aria-label={t('donation.copy')}
                        onClick={() => handleCopy(coin.addr, coin.label)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                      </span>
                    </div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DonationOptions;
