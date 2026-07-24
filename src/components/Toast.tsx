import React, { useEffect, useState, useRef, useCallback } from 'react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
  const nextId = useRef(0);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = ++nextId.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    const timer = setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
      timersRef.current.delete(id);
    }, 3000);
    timersRef.current.set(id, timer);
  }, []);

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2" role="alert" aria-live="assertive">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-6 py-3 rounded-lg shadow-lg text-white transform transition-all duration-300 animate-fade-in-up will-change-transform ${
              toast.type === 'success' ? 'bg-green-500' : toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
