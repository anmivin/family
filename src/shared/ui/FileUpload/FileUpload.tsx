import { Drawer, DrawerProps, Box, Typography, styled } from '@mui/material';
import { ChangeEventHandler, DragEventHandler, useCallback, useRef } from 'react';

const StyledInput = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.color.accentMain}`,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.spacing(3),
  cursor: 'pointer',
}));

const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      console.log(event.target.files, Array.from(event.target.files));
    }
  }, []);
  return (
    <>
      <input type="file" ref={inputRef} onChange={handleInputChange} style={{ display: 'none' }} multiple />
      <StyledInput onClick={() => inputRef.current?.click()}>
        <Typography>Загрузить файл</Typography>
      </StyledInput>
    </>
  );
};

export default FileUpload;
