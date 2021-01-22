import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  useImageGalleryDispatch,
  useImageGalleryState,
} from 'components/ImageGallery/useImageGallery';
import React from 'react';
import ThumbnailImage from './ThumbnailImage';

const useStyles = makeStyles((theme) =>
  createStyles({
    thumbnailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      padding: 8,
      margin: 0,
    },
  })
);

interface Props {
  imageUrls?: string[];
  onSelectImage?: (image: string) => void;
  defaultSelected?: string;
}

const ThumbnailGrid = (props: Props) => {
  const classes = useStyles();
  const dispatch = useImageGalleryDispatch();
  const { selectedImage, imageUrls } = useImageGalleryState();

  return (
    <Grid className={classes.thumbnailsContainer} container spacing={1}>
      {imageUrls.map((image, key) => (
        <ThumbnailImage
          key={key}
          image={image}
          selected={image === selectedImage}
          onClick={() => {
            dispatch({ type: 'set_selected_image', payload: image });
          }}
        />
      ))}
    </Grid>
  );
};

export default ThumbnailGrid;
