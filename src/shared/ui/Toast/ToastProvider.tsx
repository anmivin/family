import { useState, createContext, useContext } from 'react';
import { ToastProps, Toastlevel } from './Toast.types';
import Toast from './Toast';

export interface ToastItemProps extends Omit<ToastProps, 'level'> {
  closeTime?: number;
  disableClose?: boolean;
}

export interface ToastType extends ToastItemProps {
  toastId: number;
}

interface ToastsContextProps {
  successToast: (props: ToastItemProps) => void;
  errorToast: (props: ToastItemProps) => void;
  infoToast: (props: ToastItemProps) => void;
  warningToast: (props: ToastItemProps) => void;
}

export const ToastContext = createContext({} as ToastsContextProps);

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const handleClose = (toastId: number) => {
    setToasts((prevState) => prevState.filter((toast) => toast.toastId !== toastId));
  };

  const addToast = (toast: ToastItemProps, level: Toastlevel) => {
    const timestamp = Date.now();
    setToasts((prevState) => [...prevState, { ...toast, level, toastId: timestamp }]);
    !toast.disableClose && setTimeout(() => handleClose(timestamp), toast.closeTime ?? 5000);
  };

  const successToast = (props: ToastItemProps) => {
    addToast(props, Toastlevel.SUCCESS);
  };
  const errorToast = (props: ToastItemProps) => {
    addToast(props, Toastlevel.ERROR);
  };
  const infoToast = (props: ToastItemProps) => {
    addToast(props, Toastlevel.INFO);
  };
  const warningToast = (props: ToastItemProps) => {
    addToast(props, Toastlevel.WARNING);
  };
  return (
    <ToastContext.Provider value={{ successToast, errorToast, infoToast, warningToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: 60,
          right: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
          zIndex: 200,
        }}
      >
        {toasts.map((toast) => (
          <Toast {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
