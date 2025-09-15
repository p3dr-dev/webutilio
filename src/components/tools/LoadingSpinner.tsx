import React from 'react';

interface LoadingSpinnerProps {
  text: string;
  progress?: number | null;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text, progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = progress != null ? circumference - progress * circumference : 0;

  return (
    <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 flex flex-col justify-center items-center z-10 rounded-lg">
      <div className="relative w-24 h-24">
        {progress != null ? (
          <>
            <svg className="w-full h-full" viewBox="0 0 120 120">
              <circle
                className="text-gray-200 dark:text-gray-700"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                r={radius}
                cx="60"
                cy="60"
              />
              <circle
                className="text-purple-600"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                r={radius}
                cx="60"
                cy="60"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 0.3s' }}
                transform="rotate(-90 60 60)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-purple-700 dark:text-purple-300">
              {`${Math.round(progress * 100)}%`}
            </span>
          </>
        ) : (
          <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
        )}
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
