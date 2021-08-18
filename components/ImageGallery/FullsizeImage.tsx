import Backdrop from '@material-ui/core/Backdrop';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {
  useImageGalleryDispatch,
  useImageGalleryState,
} from './ImageGalleryState';
import Image from 'next/image';

const useStyles = makeStyles(theme =>
  createStyles({
    fullSizeImage: {
      maxHeight: '100vh',
      maxWidth: '100vw',
      border: '2px black solid',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      overflow: 'scroll',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

export default function FullsizeImage() {
  const classes = useStyles();
  const { selectedImage, showFullSizeImage } = useImageGalleryState();
  const dispatch = useImageGalleryDispatch();

  return (
    <Backdrop
      className={classes.backdrop}
      open={showFullSizeImage}
      onClick={() => dispatch({ type: 'toggle_show_fullsize_image' })}
    >
      <Image
        src={selectedImage || ''}
        objectFit='contain'
        quality={100}
        alt='fullsize'
        layout='fill'
      />
    </Backdrop>
  );
}
