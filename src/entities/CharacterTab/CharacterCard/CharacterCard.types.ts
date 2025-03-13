import { components } from '@api/Api';

export interface CharacterCardProps extends Omit<components['schemas']['OutputUserDto'], 'userFeature' | 'userSkill'> {
  bestFeature?: { xp: number; name: string; color: string };
  bestSkill?: { xp: number; name: string };
}
