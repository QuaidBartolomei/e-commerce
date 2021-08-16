import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useImageGalleryDispatch, useImageGalleryState } from './ImageGalleryState';

const useStyles = makeStyles(theme =>
  createStyles({
    mainImageContainer: ({ imageUrl }: { imageUrl: string }) => ({
      border: 'black 2px solid',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: 320,
      [theme.breakpoints.up('lg')]: {
        height: 640,
      },
      maxHeight: '100vh',
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
    <Link onClick={() => dispatch({ type: 'toggle_show_fullsize_image' })}>
      <Box className={classes.mainImageContainer} />
    </Link>
  );
}
