import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {
  useImageGalleryDispatch,
  useImageGalleryState,
} from './ImageGalleryState';

const useStyles = makeStyles(theme =>
  createStyles({
    selectedImage: ({ imageUrl }: { imageUrl: string }) => ({
      border: 'black 2px solid',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      flexGrow: 1,
      height: 400,
      [theme.breakpoints.up('sm')]: {
        height: 540,
      },
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      '&:hover': {
        cursor: 'pointer',
      },
    }),
  })
);

export default function SelectedImage() {
  const { selectedImage } = useImageGalleryState();
  const classes = useStyles({ imageUrl: selectedImage });
  const dispatch = useImageGalleryDispatch();
  return (
    <Box
      onClick={() => dispatch({ type: 'toggle_show_fullsize_image' })}
      className={classes.selectedImage}
    />
  );
}
