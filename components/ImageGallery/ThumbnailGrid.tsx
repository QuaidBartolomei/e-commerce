import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { useImageGalleryState } from './ImageGalleryState';
import ThumbnailImage from './ThumbnailImage';

const useStyles = makeStyles(theme =>
  createStyles({
    thumbnailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
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
