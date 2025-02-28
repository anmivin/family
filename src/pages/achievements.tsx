import { Box } from '@mui/material';

const colors = [
  ['#B53179', '#CD448F', '#E85CA8', '#FF75C0', '#FF96D1', '#FFB3E0', '#FFCBEB', '#FFDEF3', '#FFECF8', '#FFF5FC'],
  ['#992A2A', '#B42F2F', '#DA3A3A', '#FF4F4F', '#FF6B6B', '#FF8686', '#FFA8A8', '#FFC9C9', '#FFE3E3', '#FFF5F5'],
  ['#9E4B21', '#B95918', '#DC7313', '#FF9514', '#FFA241', '#FFB673', '#FFCBA2', '#FFDEC7', '#FFECE2', '#FFF7F3'],
  ['#B37635', '#CC8C2D', '#E6A928', '#FFCD29', '#FFD452', '#FFDD80', '#FFE7AB', '#FFF0CE', '#FFF7E6', '#FFFBF5'],
  ['#3D9C38', '#3CB23E', '#43C850', '#51DE68', '#6DE47A', '#8EE993', '#AFEFAF', '#CCF4C9', '#E0FADD', '#EEFFEB'],
  ['#329A91', '#34AD9F', '#3EC4B2', '#49D4C0', '#66DBCA', '#88E2D5', '#A9EAE0', '#C5F1EA', '#DBF8F3', '#EBFFFC'],

  ['#2F97AC', '#37ACC3', '#3BC5DE', '#33D5F1', '#55DCF3', '#7BE3F6', '#A0EAF8', '#BFF1FA', '#D8F7FD', '#EBFCFF'],

  ['#205797', '#2363B3', '#2671D9', '#3887FF', '#5C9FFF', '#85B8FF', '#ABCFFF', '#C9E1FF', '#DEEDFF', '#EBF4FF'],
  ['#5843A4', '#6D53C6', '#8467E0', '#9E7DFF', '#AF95FF', '#C3B0FF', '#D6CAFF', '#E4DDFF', '#EEE9FF', '#F3F0FF'],
  ['#85369C', '#A044BB', '#B85FD2', '#D373F5', '#DC8CF7', '#E6A8F8', '#EEC3FA', '#F5D8FC', '#F9E6FD', '#FCF0FF'],
  ['#8C5235', '#A1603E', '#B6714C', '#CB8761', '#D49B7B', '#DCB39B', '#E5CABA', '#EEDED4', '#F6EDE7', '#FFF9F5'],
];

const colr = [
  ['#FEDDDF', '#FEBCC6', '#FD9AB4', '#FB80AD', '#F957A2', '#D63F94', '#B32B85', '#901B74', '#771069'],
  ['#FFE6D6', '#FFC6AE', '#FFA085', '#FF7B67', '#FF3F35', '#DB262C', '#B71A2D', '#93102B', '#7A0A2A'],
  ['#FFF1D3', '#FFDEA6', '#FFC77A', '#FFB059', '#FF8B23', '#DB6A19', '#B74E11', '#93360B', '#7A2506'],
  ['#FFFCCF', '#FFF89F', '#FFF36F', '#FFEE4B', '#FFE70F', '#DBC40A', '#B7A207', '#938104', '#7A6902'],
  ['#F5FDCB', '#EAFB98', '#D6F364', '#C1E73D', '#A3D804', '#87B902', '#6D9B02', '#547D01', '#436700'],
  ['#ECFED6', '#D4FDAE', '#B5FA86', '#97F667', '#68F136', '#48CF27', '#2EAD1B', '#188B11', '#0A730B'],
  ['#D4FDE2', '#AAFCCE', '#7EF7BF', '#5DF0B9', '#2BE6B3', '#1FC5A8', '#15A59A', '#0D8385', '#08626E'],
  ['#D8ECFE', '#B1D6FE', '#8ABDFE', '#6DA7FD', '#3D83FC', '#2C65D8', '#1E4AB5', '#133392', '#0B2378'],
  ['#F8DFFE', '#EFC0FE', '#E1A1FC', '#D189FA', '#B962F7', '#9147D4', '#6D31B1', '#4D1F8F', '#361276'],
];
const Achievements = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ background: 'black', padding: '20px' }}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <Box display="flex" flexDirection="row">
        {colors.map((col) => (
          <Box display="flex" flexDirection="column" width="100px">
            {col.map((c) => (
              <Box sx={{ width: '100%', height: '40px', backgroundColor: c }}> </Box>
            ))}
          </Box>
        ))}
        табы достпные\востребованные
      </Box>
      <Box display="flex" flexDirection="row">
        {colr.map((col) => (
          <Box display="flex" flexDirection="column" width="100px">
            {col.map((c) => (
              <Box sx={{ width: '100%', height: '40px', backgroundColor: c }}> </Box>
            ))}
          </Box>
        ))}
        табы достпные\востребованные
      </Box>
    </Box>
  );
};

export default Achievements;
