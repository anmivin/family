import { ProfiIcons } from '../../PropfileIIcon.constants';
import { calcLavel } from '../../libs/calcLavel';
const CharacterCard = () => {
  const user = { level: 1, xp: 100, gold: 400 };
  const icon = ProfiIcons[1];
  const nextLavelXp = calcLavel(user.level + 1);
  return (
    <>
      <>
        <>{icon}</>
        <>
          {user.xp}
          {nextLavelXp}
        </>
        <>{user.gold}</>
      </>
      <>
        карта характеристик <>поиск</>
        <>табы переключения видов карта\список</>
      </>
      <>карта навыков</>
      <>Кнопа для создания таски</>

      <>
        раздел семьи
        <>члены с контактами, др, другие даты</>
        <></>
      </>
    </>
  );
};

export default CharacterCard;
