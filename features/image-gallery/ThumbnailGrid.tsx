import Box from '@mui/material/Box';
import React from 'react';
import { useImageGalleryState } from './ImageGalleryState';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailGrid = () => {
  const { selectedImage, imageUrls } = useImageGalleryState();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        m: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {imageUrls.map((image, key) => (
        <ThumbnailImage
          key={key}
          image={image}
          selected={image === selectedImage}
        />
      ))}
    </Box>
  );
};

export default ThumbnailGrid;
