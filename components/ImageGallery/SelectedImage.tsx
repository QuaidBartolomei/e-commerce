import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {
  useImageGalleryDispatch,
  useImageGalleryState,
} from './ImageGalleryState';
import Image from 'next/image';

const useStyles = makeStyles(theme =>
  createStyles({
    selectedImage: () => ({
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      position: 'relative',
      flexGrow: 1,
      height: 320,
      marginBottom: theme.spacing(1),
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
    <Paper
      onClick={() => dispatch({ type: 'toggle_show_fullsize_image' })}
      className={classes.selectedImage}
    >
      <Image
        src={selectedImage}
        layout='fill'
        objectFit='cover'
        alt='product'
      />
    </Paper>
  );
}
