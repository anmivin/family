import { Box } from '@mui/material';

import { FireIcon, MedalIcon, CrownIcon } from '@ui/Icons';

import StreakCard from '@ui/StreakCard';
import { Paths } from '@shared/constants/routes';
import { StreakSeectionProps } from './StreakSection.types';
const StreakSection = (props: StreakSeectionProps) => {
  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
      <StreakCard icon={<CrownIcon />} name="Стрик" value={`${props.streak ?? 0} дней`} link={Paths.calendar} />
      <StreakCard
        icon={<FireIcon />}
        name="Продуктивность (неделя)"
        value={`${props.productivity ?? 0} задач`}
        link={Paths.tasks}
      />
      <StreakCard
        icon={<MedalIcon />}
        name="Достижений получено"
        value={`${props.achievements ?? 0}`}
        link={Paths.achievemnts}
      />
      <StreakCard name="" value="" link={Paths.calendar} />
    </Box>
  );
};

export default StreakSection;
