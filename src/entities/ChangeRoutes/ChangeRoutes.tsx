import { Box, Typography, Button } from '@mui/material';
import { menuRoutes } from '@constants/routes';
import Draggable from 'react-draggable';
import { useState } from 'react';

// Styles
const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    width: '200px',
    minHeight: '300px',
    position: 'relative',
  },
  item: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'move',
    width: '100%',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
};

const ChangeRoutes = () => {
  const [items, setItems] = useState(menuRoutes);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Function to calculate overlap percentage
  const calculateOverlap = (dragY, itemTop, itemHeight) => {
    const dragBottom = dragY + itemHeight / 2; // Center of dragged item
    const overlapTop = Math.max(itemTop, dragY);
    const overlapBottom = Math.min(itemTop + itemHeight, dragBottom);
    const overlapHeight = Math.max(0, overlapBottom - overlapTop);
    return (overlapHeight / itemHeight) * 100;
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrag = (e, data) => {
    if (draggedIndex === null) return;

    const draggedItemHeight = e.target.offsetHeight;
    const draggedItemTop = data.clientY - draggedItemHeight / 2;

    // Find the target index based on overlap
    let targetIndex = draggedIndex;
    items.forEach((_, index) => {
      if (index !== draggedIndex) {
        const itemRef = document.getElementById(`item-${index}`);
        console.log(itemRef);
        if (itemRef) {
          const itemRect = itemRef.getBoundingClientRect();
          const overlapPercentage = calculateOverlap(draggedItemTop, itemRect.top, itemRect.height);

          if (overlapPercentage > 50) {
            targetIndex = index;
          }
        }
      }
    });

    // Swap items if the target index has changed
    if (targetIndex !== draggedIndex) {
      const updatedItems = [...items];
      const draggedItem = updatedItems[draggedIndex];
      updatedItems.splice(draggedIndex, 1);
      updatedItems.splice(targetIndex, 0, draggedItem);
      setItems(updatedItems);
      setDraggedIndex(targetIndex);
    }
  };

  const handleDragStop = () => {
    setDraggedIndex(null); // Reset dragged index
  };

  return (
    <>
      <>настроить разделы </>
      <Box display="flex" flexDirection="column" gap={2}>
        {items.map((route, index) => (
          <Draggable
            axis="y"
            bounds="parent"
            onStart={() => handleDragStart(index)}
            onDrag={handleDrag}
            onStop={handleDragStop}
          >
            <Box
              id={`item-${index}`}
              display="flex"
              gap={2}
              sx={{ ...styles.item, backgroundColor: draggedIndex === index ? '#f0f0f0' : '#fff' }}
            >
              {route.icon}
              <Typography>{route.name}</Typography>
            </Box>
          </Draggable>
        ))}
      </Box>
    </>
  );
};

export default ChangeRoutes;
