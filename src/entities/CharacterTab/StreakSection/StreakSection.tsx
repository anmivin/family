import { Box } from '@mui/material';

import { FireIcon, MedalIcon, CrownIcon } from '@ui/Icons';

import StreakCard from '@ui/StreakCard';
import { Paths } from '@constants/routes';

const StreakSection = () => {
  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
      <StreakCard icon={<CrownIcon />} name="Стрик" value="30 дней" link={Paths.calendar} />
      <StreakCard icon={<FireIcon />} name="Продуктивность (неделя)" value="5 задач" link={Paths.tasks} />
      <StreakCard icon={<MedalIcon />} name="Достижений получено" value="10" link={Paths.achievemnts} />
      <StreakCard name="" value="" link={Paths.calendar} />
    </Box>
  );
};

export default StreakSection;
