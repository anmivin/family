import { components } from '@api/Api';
export interface TaskCardProps
  extends Pick<components['schemas']['OutputTaskDto'], 'name' | 'date' | 'description' | 'repeat'> {
  id: string;
  creator?: string;
}
