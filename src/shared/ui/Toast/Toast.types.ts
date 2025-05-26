export enum Toastlevel {
  'SUCCESS',
  'INFO',
  'WARNING',
  'ERROR',
}
export interface ToastProps {
  onClose?: () => void;
  title: string;
  content?: string;
  level?: Toastlevel;
}
