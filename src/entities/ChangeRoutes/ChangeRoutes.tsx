import { Box, Typography, Button } from '@mui/material';
import { menuRoutes } from '@shared/constants/routes';
import Draggable from 'react-draggable';
import { useState, useRef } from 'react';
import FormSection from '@ui/FormSection';

// Styles
const styles = {
  item: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'move',
    width: '100%',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
};
const ITEM_HEIGHT = 46;
const ChangeRoutes = () => {
  const [items, setItems] = useState(menuRoutes);

  const draggedItemIndex = useRef(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const swapItems = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  const handleDragStart = (index: number) => {
    draggedItemIndex.current = index;
  };

  const handleDrag = (e, data, itemId: number) => {
    const draggedIndex = draggedItemIndex.current;
    if (draggedIndex === -1 || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseY = e.clientY - containerRect.top;
    let targetIndex = draggedIndex;

    // Calculate midpoints for next and previous items
    const nextMidpoint = (draggedIndex + 1) * ITEM_HEIGHT + ITEM_HEIGHT / 2;
    const prevMidpoint = draggedIndex * ITEM_HEIGHT + ITEM_HEIGHT / 2;
    /*     console.log(nextMidpoint, prevMidpoint, mouseY); */
    if (mouseY >= nextMidpoint) {
      targetIndex = draggedIndex + 1;
    } else if (mouseY <= prevMidpoint) {
      targetIndex = draggedIndex - 1;
    }

    // Ensure targetIndex stays within bounds
    targetIndex = Math.max(0, Math.min(targetIndex, items.length - 1));

    if (targetIndex !== draggedIndex) {
      console.log('swap', targetIndex, draggedIndex);
      swapItems(draggedIndex, targetIndex);
      draggedItemIndex.current = targetIndex;
    }
  };

  return (
    <FormSection title="настроить разделы">
      <Box display="flex" flexDirection="column" gap={2} ref={containerRef}>
        {items.map((route, index) => (
          <Draggable
            axis="y"
            /*  bounds="parent" */
            /*             onStart={() => handleDragStart(index)}
            onDrag={handleDrag} 
            onStop={handleDragStop}*/
            key={index}
            onStart={() => handleDragStart(index)}
            onDrag={(e, data) => handleDrag(e, data, index)}
            /* position={{ x: 0, y: index * ITEM_HEIGHT }} */

            /*     scale={1} */
          >
            <Box
              display="flex"
              gap={2}
              sx={{ ...styles.item, backgroundColor: draggedItemIndex.current === index ? '#f0f0f0' : '#fff' }}
            >
              {route.icon}
              <Typography>{route.name}</Typography>
            </Box>
          </Draggable>
        ))}
      </Box>
    </FormSection>
  );
};

export default ChangeRoutes;
