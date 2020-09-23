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
      maxWidth: '100%',
      height: '64px',
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
      <Container
        className={classes.mainImageContainer}
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      >
      </Container>
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
            <img src={image} className={classes.thumbnailImage} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageGallery;
