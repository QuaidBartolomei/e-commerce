import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { hatData } from 'data/ShopItems';
import React, { useState } from 'react';
import FullsizeImage from './FullsizeImage';
import ThumbnailGrid from './ThumbnailGrid';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        margin: theme.spacing(1),
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
  })
);

const images: string[] = hatData.map((hat) => hat.imageUrl);

const ImageGallery = ({ mainImage }: { mainImage: string }) => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [showFullsizeImage, setShowFullsizeImage] = useState(false);
  const thumbnailImages = [mainImage, ...images];
  return (
    <React.Fragment>
      <FullsizeImage
        open={showFullsizeImage}
        onClick={() => setShowFullsizeImage(false)}
        image={selectedImage}
      />
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
        <ThumbnailGrid
          thumbnailImages={thumbnailImages}
          onSelectImage={setSelectedImage}
        />
      </Container>
    </React.Fragment>
  );
};

export default ImageGallery;
