import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ThumbnailGrid from 'components/ImageGallery/components/ThumbnailGrid';
import { ImageGalleryProvider } from 'components/ImageGallery/useImageGallery';
import React from 'react';
import FullsizeImage from './components/FullsizeImage';
import SelectedImage from './components/SelectedImage';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
  })
);

interface Props {
  imageUrls: string[];
}
const ImageGallery = (props: Props) => {
  const { imageUrls } = props;
  const classes = useStyles();

  return (
    <ImageGalleryProvider
      imageUrls={imageUrls.filter((v, i, a) => a.indexOf(v) === i)}
    >
      <FullsizeImage />
      <Container className={classes.container}>
        <SelectedImage />
        <Divider />
        <ThumbnailGrid />
      </Container>
    </ImageGalleryProvider>
  );
};

export default ImageGallery;
