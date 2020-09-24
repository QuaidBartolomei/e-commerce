import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import Link from '@material-ui/core/Link';
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
      '&:hover': {
        cursor: 'pointer',
      },
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `rgba(0,0,0,0.7)`,
      zIndex: 2,
    },
    fullSizeImage: {
      maxHeight: '100vh',
      maxWidth: '100vw',
      border: '2px black solid',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

const images: string[] = hatData.map((hat) => hat.imageUrl);

const ImageGallery = ({ mainImage }: { mainImage: string }) => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const thumbnailImages = [mainImage, ...images];
  const [showFullsizeImage, setShowFullsizeImage] = useState(false);
  return (
    <React.Fragment>
      <Box
        className={classes.overlay}
        style={{ visibility: showFullsizeImage ? 'visible' : 'hidden' }}
      >
        <img
          className={classes.fullSizeImage}
          src={selectedImage}
          onClick={() => setShowFullsizeImage(false)}
        />
      </Box>

      <Container className={classes.container}>
        <Link onClick={() => setShowFullsizeImage(true)}>
          <Box
            className={classes.mainImageContainer}
            style={{
              backgroundImage: `url(${selectedImage})`,
            }}
          />
        </Link>
        <Divider />
        <Grid className={classes.thumbnailsContainer} container spacing={1}>
          {thumbnailImages.map((image, key) => (
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
    </React.Fragment>
  );
};

export default ImageGallery;
