import React from 'react';

const DonationOptions: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Opção 1: PIX (Mais popular no Brasil) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">Apoie com Pix</h3>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Aponte a câmera do seu celular para o QR Code abaixo. Rápido, fácil e sem taxas!
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
          Ou use a chave aleatória: <br/>
          <span className="font-mono bg-gray-100 dark:bg-gray-700 p-1 rounded">
            {/* SUBSTITUA PELA SUA CHAVE PIX */}
            1064f891-4702-4fc0-b74b-d8ed30413f28
          </span>
        </p>
      </div>

      {/* Opção 2: Buy Me a Coffee (Internacional) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Pague-me um Café ☕</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Se preferir, você pode me apoiar através da plataforma Buy Me a Coffee.
        </p>
        <a 
          href="https://www.buymeacoffee.com/pedro0simoes" // SUBSTITUA PELO SEU LINK
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
        >
          Buy Me a Coffee
        </a>
      </div>
    </div>
  );
};

export default DonationOptions;
