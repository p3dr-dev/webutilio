import React, { useState } from 'react';
import { useTranslations } from '../i18n/utils';

interface FeedbackFormProps {
  lang: 'pt' | 'en';
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // IMPORTANT: Replace with your actual Web3Forms Access Key
  // You can get one at https://web3forms.com/
  const ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error('Web3Forms Error:', result);
        setSubmitStatus('error');
        setErrorMessage(result.message || t('components.feedbackForm.errorMessage'));
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitStatus('error');
      setErrorMessage(t('components.feedbackForm.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center dark:bg-green-900 dark:text-green-200 dark:border-green-700">
        <strong className="font-bold block mb-2">✅ Success!</strong>
        <span className="block sm:inline">{t('components.feedbackForm.successMessage')}</span>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="mt-4 text-sm underline hover:text-green-900 dark:hover:text-green-100"
        >
          Enviar outro / Send another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      {/* Aviso se a chave não estiver configurada (Apenas em DEV) */}
      {ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE' && import.meta.env.DEV && (
        <div className="mb-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-sm">
          <p className="font-bold">Developer Warning:</p>
          <p>Web3Forms Access Key is missing. Add <code>PUBLIC_WEB3FORMS_KEY</code> to your .env file.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value={`New Feedback from SLIT.IO (${lang.toUpperCase()})`} />
        <input type="hidden" name="from_name" value="SLIT.IO Feedback Form" />
        {/* Honeypot Spam Protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="mb-6">
          <label htmlFor="name" className="block text-left text-gray-700 dark:text-gray-200 font-bold mb-2">
            {t('components.feedbackForm.nameLabel')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            placeholder={t('components.feedbackForm.namePlaceholder') as string}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-left text-gray-700 dark:text-gray-200 font-bold mb-2">
            {t('components.feedbackForm.emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            placeholder={t('components.feedbackForm.emailPlaceholder') as string}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-left text-gray-700 dark:text-gray-200 font-bold mb-2">
            {t('components.feedbackForm.messageLabel')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            placeholder={t('components.feedbackForm.messagePlaceholder') as string}
            required
          ></textarea>
        </div>

        {submitStatus === 'error' && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative dark:bg-red-900 dark:text-red-200 dark:border-red-700">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-bold py-3 px-4 rounded-md transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed text-gray-200 dark:bg-gray-600'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {isSubmitting ? t('components.feedbackForm.sending') : t('components.feedbackForm.submitButton')}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
