import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ThumbnailImage from './ThumbnailImage';

const useStyles = makeStyles((theme) =>
  createStyles({
    thumbnailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
  })
);

interface Props {
  imageUrls: string[];
  onSelectImage: (image: string) => void;
  defaultSelected?: string;
}

const ThumbnailGrid = (props: Props) => {
  const { imageUrls, onSelectImage, defaultSelected = '' } = props;
  const [selectedImage, setSelectedImage] = React.useState(defaultSelected);
  const classes = useStyles();

  return (
    <Grid className={classes.thumbnailsContainer} container spacing={1}>
      {imageUrls.map((image, key) => (
        <ThumbnailImage
          key={key}
          image={image}
          selected={image === selectedImage}
          onClick={() => {
            setSelectedImage(image);
            onSelectImage(image);
          }}
        />
      ))}
    </Grid>
  );
};

export default ThumbnailGrid;
