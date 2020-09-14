import Grid from '@material-ui/core/Grid/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { hatData } from 'data/hats';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
    thumbnail: {
      display: 'flex',
      justifyContent: 'center',
    },
    thumbnailImage: {
      maxWidth: '100%',
      height: '64px',
    },
    mainImage: {
      maxWidth: '100%',
      maxHeight: '50vh',
    },
  })
);

const images: string[] = hatData.map((hat) => hat.imageUrl);

const ImageGallery = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(images[0] || '');
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.thumbnail}>
        <img src={selectedImage} className={classes.mainImage} />
      </Grid>
      {images.map((image, key) => (
        <Grid
          key={key}
          item
          xs={3}
          className={classes.thumbnail}
          onClick={() => setSelectedImage(image)}
        >
          <img src={image} className={classes.thumbnailImage} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
