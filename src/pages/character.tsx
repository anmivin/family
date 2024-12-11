import CharacterCard from '../entities/CharacterCard';
import AddTaskButton from '../shared/ui/AddTaskButton';
import { Tabs, Tab } from '@mui/material';
const Character = () => {
  return (
    <>
      <Tabs sx={{ with: '100%' }}>
        <Tab label="1" value={1} />
        <Tab label="2" value={2} />
        <Tab label="3" value={3} />
      </Tabs>
      <CharacterCard />
      <AddTaskButton />

      <>
        раздел семьи
        <>члены с контактами, др, другие даты</>
        <></>
      </>
    </>
  );
};

export default Character;
