export interface TaskCardProps {
  id: string;
  name: string;
  description: string;
  date?: string;
  timed?: boolean;
  creator?: string;
  repeat: number;
}
