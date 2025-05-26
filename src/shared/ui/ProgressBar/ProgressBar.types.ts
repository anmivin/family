import { ReactNode } from 'react';

export type ColorType = 'red' | 'green' | 'blue' | 'yellow' | 'violet' | 'orange';
export interface ProgressBarProps {
  value: number;
  title?: ReactNode;
  subtitle?: string;
  color?: ColorType;
}
