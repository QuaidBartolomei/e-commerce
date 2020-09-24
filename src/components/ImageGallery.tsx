import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { hatData } from 'data/ShopItems';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    thumbnailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    thumbnail: {
      display: 'flex',
      justifyContent: 'center',
    },
    thumbnailImage: {
      width: '100%',
      height: '64px',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      '&:hover': {
        cursor: 'pointer',
        border: 'black 1px solid',
      },
    },
    mainImage: {
      maxWidth: '100%',
      maxHeight: '50vh',
    },
    mainImageContainer: {
      border: 'black 2px solid',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: 480,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  })
);

const images: string[] = hatData.map((hat) => hat.imageUrl);

const ImageGallery = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(images[0] || '');
  return (
    <Container className={classes.container}>
      <Box
        className={classes.mainImageContainer}
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      />
      <Divider />
      <Grid className={classes.thumbnailsContainer} container spacing={1}>
        {images.map((image, key) => (
          <Grid
            key={key}
            item
            className={classes.thumbnail}
            onClick={() => setSelectedImage(image)}
            xs={3}
          >
            <Box
              className={classes.thumbnailImage}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageGallery;
