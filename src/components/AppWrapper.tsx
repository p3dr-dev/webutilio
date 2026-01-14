import React from 'react';
import { ToastProvider } from './Toast';

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
};

export default AppWrapper;
