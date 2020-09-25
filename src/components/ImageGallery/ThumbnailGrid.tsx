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
  thumbnailImages: string[];
  onSelectImage: (image: string) => void;
}) => {
  const { thumbnailImages, onSelectImage } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.thumbnailsContainer} container spacing={1}>
      {thumbnailImages.map((image, key) => (
        <Grid
          key={key}
          item
          className={classes.thumbnail}
          onClick={() => onSelectImage(image)}
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
  );
};

export default ThumbnailGrid;
