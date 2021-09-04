import Box from '@material-ui/core/Box';
import React from 'react';
import { ImageGalleryProvider } from './ImageGalleryState';
import SelectedImage from './SelectedImage';
import ThumbnailGrid from './ThumbnailGrid';

type ImageGalleryProps = {
  imageUrls: string[];
} & React.HTMLProps<HTMLDivElement>;

export default function ImageGallery(props: ImageGalleryProps) {
  const { imageUrls, className, children, ...divProps } = props;
  const filteredUrls = React.useMemo(() => {
    return imageUrls.filter((v, i, a) => a.indexOf(v) === i); // remove duplicates
  }, [imageUrls]);
  return (
    <ImageGalleryProvider imageUrls={filteredUrls}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SelectedImage />
        <ThumbnailGrid />
      </Box>
    </ImageGalleryProvider>
  );
}
