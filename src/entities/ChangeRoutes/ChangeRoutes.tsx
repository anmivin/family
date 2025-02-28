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
  // State to store the list of items
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  // State to track the currently dragged item's index
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Handle drag start
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  // Handle drag stop
  const handleDragStop = (e, data, targetIndex) => {
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      // Swap the dragged item with the target item
      const updatedItems = [...items];
      const draggedItem = updatedItems[draggedIndex];
      updatedItems[draggedIndex] = updatedItems[targetIndex];
      updatedItems[targetIndex] = draggedItem;

      // Update the state
      setItems(updatedItems);
    }

    // Reset the dragged index
    setDraggedIndex(null);
  };

  return (
    <>
      <>настроить разделы </>
      <Box display="flex" flexDirection="column" gap={2}>
        {menuRoutes.map((route, index) => (
          <Draggable
            axis="y"
            bounds="parent"
            onStart={() => handleDragStart(index)}
            onStop={(e, data) => handleDragStop(e, data, index)}
          >
            <Box
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
