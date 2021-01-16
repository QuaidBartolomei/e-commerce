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

interface Props {
  imageUrls: string[];
  onSelectImage: (image: string) => void;
  defaultSelected?: string;
}

const ThumbnailGrid = (props: Props) => {
  const { imageUrls, onSelectImage, defaultSelected } = props;
  const [selectedImage, setSelectedImage] = React.useState(
    defaultSelected || ''
  );
  const classes = useStyles();
  return (
    <Grid className={classes.thumbnailsContainer} container spacing={1}>
      {imageUrls.map((image, key) => (
        <Grid
          key={key}
          item
          className={classes.thumbnail}
          onClick={() => {
            console.log('selecting image');
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
