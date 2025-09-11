import React from 'react';

interface LoadingSpinnerProps {
  text: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text }) => {
  return (
    <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 flex flex-col justify-center items-center z-10 rounded-lg">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
