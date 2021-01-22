import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  useImageGalleryDispatch,
  useImageGalleryState
} from 'components/ImageGallery/useImageGallery';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    mainImageContainer: {
      border: 'black 2px solid',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: 480,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

export default function SelectedImage() {
  const classes = useStyles();
  const dispatch = useImageGalleryDispatch();
  const { selectedImage } = useImageGalleryState();
  return (
    <Link onClick={() => dispatch({ type: 'toggle_show_fullsize_image' })}>
      <Box
        className={classes.mainImageContainer}
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      />
    </Link>
  );
}