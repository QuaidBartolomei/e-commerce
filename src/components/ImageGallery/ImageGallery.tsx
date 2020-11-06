import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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

const ImageGallery = ({ imageUrls }: { imageUrls: string[] }) => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState('');
  const [showFullsizeImage, setShowFullsizeImage] = useState(false);
  React.useEffect(() => {
    setSelectedImage(imageUrls[0]);
  }, [imageUrls]);
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
          imageUrls={imageUrls}
          onSelectImage={setSelectedImage}
          defaultSelected={imageUrls[0]}
        />
      </Container>
    </React.Fragment>
  );
};

export default ImageGallery;
