import { ReactFlow, useNodesState, useEdgesState, Edge, Node } from '@xyflow/react';
import CustomNode from './CustomNode';
import { characteristics } from '@constants/characteristics';
import { useEffect } from 'react';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
  .react-flow__node {
    padding: 0px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    flex-direction: column;
    border: none;
    width: fit-content;
    border-radius: 50%;
  }

  .react-flow__node.selectable:hover {
    border-color: var(--xy-theme-hover);
  }

  .react-flow__node.selectable.selected {
    border-color: var(--xy-theme-selected);
    box-shadow: var(--xy-node-boxshadow-default);
  }

  .react-flow__handle {
    background-color: transparent;
    border: none;
    pointer-events: none;
  }

  .react-flow__edge-path {
    stroke: red;
    pointer-events: none;
  }
`;
const nodeTypes = { default: CustomNode };

const nodesEdges = () => {
  const nodes = [
    { id: 'center', position: { x: 300, y: 300 }, data: { name: '1', color: 'dark', icon: <></> }, type: 'default' },
  ];
  const edges: { id: string; source: string; target: string; sourceHandle?: string; targetHandle?: string }[] = [];
  characteristics.map((char) => {
    nodes.push({
      id: char.id,
      position: char.position,
      data: { name: char.name, color: char.color, icon: char.icon },
      type: 'default',
    });
    edges.push({
      id: `${char.id}-center`,
      source: char.id,
      target: 'center',
      sourceHandle: char.sorceHandle,
      targetHandle: char.targetHandle,
    });
    char.branches.map((br) => {
      nodes.push({
        id: br.id,
        position: br.position,
        data: { name: br.name, color: char.color, icon: br.icon },
        type: 'default',
      });
      edges.push({
        id: `${br.id}-${char.id}`,
        source: br.id,
        target: char.id,
        sourceHandle: br.sorceHandle,
        targetHandle: br.targetHandle,
      });
    });
  });
  return { nodes, edges };
};

const CharacteristicFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    setNodes(nodesEdges().nodes);
    setEdges(nodesEdges().edges);
  }, []);

  return (
    <Container style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
    </Container>
  );
};

export default CharacteristicFlow;
