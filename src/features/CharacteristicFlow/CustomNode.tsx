import { Box, styled } from '@mui/material';
import { Color } from '@theme/themeVariants';
import { Node, NodeProps, Position, Handle } from '@xyflow/react';
import { cloneElement, createElement, ReactNode } from 'react';

type NodeType = Node<{ icon: ReactNode; name: string; color: string }, 'custom'>;

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
  return (
    <>
      {Object.values(Position).map((pos) => (
        <>
          <Handle id={pos} type="target" position={pos} isConnectable={false} />
          <Handle id={pos} type="source" position={pos} isConnectable={false} />
        </>
      ))}

      <StyledBox $color={data.color} onClick={() => console.log('dsf')}>
        {data.icon}
      </StyledBox>
    </>
  );
};

export default CustomNode;
