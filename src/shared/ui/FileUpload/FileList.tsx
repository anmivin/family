import { ImageItem } from './FileUpload.types';
import { Box, styled, Button, CircularProgress } from '@mui/material';
import { CrossIcon } from '../Icons';
export const ImageListContainer = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ImageContainer = styled(Box)`
  display: grid;
  place-items: center;
  width: 120px;
  height: 120px;
  border: 4px solid ${({ theme }) => theme.color.textMain};
  border-radius: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export const ImagePreview = styled(Box)<{ $img?: string; $uploading?: boolean }>`
  width: 100%;
  height: 100%;
  background-image: ${({ $img }) => `url(${$img})`};
  background-position: center center;
  background-size: cover;
  filter: ${({ $uploading }) => $uploading && 'blur(2px)'};
`;

export interface ImageListProps {
  imageList: ImageItem[];
  onImageRemove?: (props: ImageItem) => void;
  onImageClick?: (props: ImageItem) => void;
}
const ImageList = ({ imageList, onImageRemove, onImageClick }: ImageListProps) => {
  return (
    <>
      {!!imageList.length && (
        <ImageListContainer>
          {imageList.map((item) => (
            <ImageContainer key={item.key} onClick={() => onImageClick?.(item)}>
              <ImagePreview $img={URL.createObjectURL(item.file)} $uploading={item.uploadProgress !== 100} />
              {item.uploadProgress !== 100 ? (
                <CircularProgress
                  variant={item.uploadProgress === 0 ? 'indeterminate' : 'determinate'}
                  value={item.uploadProgress}
                  size={60}
                  color="secondary"
                  sx={{ position: 'absolute' }}
                />
              ) : (
                onImageRemove && (
                  <Button
                    sx={{
                      p: 0,
                    }}
                    size="small"
                    onClick={() => onImageRemove(item)}
                  >
                    <CrossIcon />
                  </Button>
                )
              )}
            </ImageContainer>
          ))}
        </ImageListContainer>
      )}
    </>
  );
};

export default ImageList;
