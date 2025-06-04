import { components } from '@shared/api/Api';

export interface StreakSeectionProps
  extends Pick<components['schemas']['OutputUserDto'], 'achievements' | 'productivity' | 'streak'> {}
