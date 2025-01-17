import { Box, styled, Tooltip, Popover } from '@mui/material';
import { Color } from '@theme/themeVariants';
import { Node, NodeProps, Position, Handle, NodeToolbar } from '@xyflow/react';
import { cloneElement, createElement, ReactNode, useState } from 'react';
type NodeType = Node<{ icon: ReactNode; name: string; color: string; points: number }, 'custom'>;

const StyledBox = styled(Box)<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme, $color }) => `4px solid ${theme.color[`${$color}600`]}`};
  background-color: ${({ theme, $color }) => theme.color[`${$color}200`]};
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;
const CustomNode = ({ data }: NodeProps<NodeType>) => {
  const [selectedInfo, setselectedInfo] = useState<number | null>(null);
  const [anchorel, setAnchorEl] = useState<HTMLDivElement | null>(null);
  return (
    <>
      {Object.values(Position).map((pos) => (
        <>
          <Handle id={pos} type="target" position={pos} isConnectable={false} />
          <Handle id={pos} type="source" position={pos} isConnectable={false} />
        </>
      ))}

      <StyledBox
        $color={data.color}
        onClick={(e) => {
          console.log(e);
          setselectedInfo(data.points);
          setAnchorEl(e.currentTarget);
        }}
      >
        {data.icon}
      </StyledBox>

      <NodeToolbar isVisible={!!anchorel} position={Position.Bottom}>
        {selectedInfo}
      </NodeToolbar>

      {/* <Popover open={!!anchorel} onClose={() => setAnchorEl(null)}>
        {selectedInfo}
      </Popover> */}
    </>
  );
};

export default CustomNode;
