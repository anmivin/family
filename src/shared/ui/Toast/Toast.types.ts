export enum Toastlevel {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}
export interface ToastProps {
  onClose?: () => void;
  title: string;
  content?: string;
  level?: Toastlevel;
}
