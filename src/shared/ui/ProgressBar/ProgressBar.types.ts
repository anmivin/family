export type ColorType = 'red' | 'green' | 'blue' | 'yellow' | 'violet' | 'orange';
export interface ProgressBarProps {
  value: number;
  title?: string;
  subtitle?: string;
  color?: ColorType;
}
