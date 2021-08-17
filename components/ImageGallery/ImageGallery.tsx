import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import FullsizeImage from './FullsizeImage';
import { ImageGalleryProvider } from './ImageGalleryState';
import SelectedImage from './SelectedImage';
import ThumbnailGrid from './ThumbnailGrid';

const useStyles = makeStyles(theme =>
  createStyles({
    imageGallery: {
    },
  })
);

interface Props {
  imageUrls: string[];
}

export default function ImageGallery(props: Props) {
  const classes = useStyles();
  const imageUrls = props.imageUrls.filter((v, i, a) => a.indexOf(v) === i); // remove duplicates
  return (
    <ImageGalleryProvider imageUrls={imageUrls}>
      <FullsizeImage />
      <Container className={classes.imageGallery}>
        <SelectedImage />
        <ThumbnailGrid />
      </Container>
    </ImageGalleryProvider>
  );
}
