import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
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
  })
);

const ThumbnailGrid = (props: {
  imageUrls: string[];
  onSelectImage: (image: string) => void;
}) => {
  const { imageUrls, onSelectImage } = props;
  const [selectedImage, setSelectedImage] = React.useState('');
  const classes = useStyles();
  return (
    <Grid className={classes.thumbnailsContainer} container spacing={1}>
      {imageUrls.map((image, key) => (
        <Grid
          key={key}
          item
          className={classes.thumbnail}
          onClick={() => {
            let newSelectedImage = image === selectedImage ? '' : image;
            setSelectedImage(newSelectedImage);
            onSelectImage(newSelectedImage);
          }}
          xs={3}
        >
          <Box
            className={classes.thumbnailImage}
            style={{
              backgroundImage: `url(${image})`,
              border: image === selectedImage ? 'black 1px solid' : 'none',
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ThumbnailGrid;
