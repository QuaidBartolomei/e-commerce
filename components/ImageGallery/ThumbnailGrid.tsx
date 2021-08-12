import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useImageGalleryState } from './ImageGallery';
import ThumbnailImage from './ThumbnailImage';

const useStyles = makeStyles(theme =>
  createStyles({
    thumbnailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      margin: 0,
    },
  })
);

const ThumbnailGrid = () => {
  const classes = useStyles();
  const { selectedImage, imageUrls } = useImageGalleryState();

  return (
    <div className={classes.thumbnailsContainer}>
      {imageUrls.map((image, key) => (
        <ThumbnailImage
          key={key}
          image={image}
          selected={image === selectedImage}
        />
      ))}
    </div>
  );
};

export default ThumbnailGrid;
