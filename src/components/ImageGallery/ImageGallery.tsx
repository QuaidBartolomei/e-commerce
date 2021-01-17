import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  useItemDetailsDispatch,
  useItemDetailsState,
} from 'pages/ItemDetails/useItemDetails';
import React from 'react';
import FullsizeImage from './FullsizeImage';
import ItemThumbnailGrid from '../ThumbnailGrid/ThumbnailGrid';

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

const ItemImagesSection = () => {
  const classes = useStyles();
  const { selectedImage, item } = useItemDetailsState();
  const dispatch = useItemDetailsDispatch();

  return (
    <React.Fragment>
      <FullsizeImage />
      <Container className={classes.container}>
        <Link onClick={() => dispatch({ type: 'toggle_show_fullsize_image' })}>
          <Box
            className={classes.mainImageContainer}
            style={{
              backgroundImage: `url(${selectedImage})`,
            }}
          />
        </Link>
        <Divider />
        <ItemThumbnailGrid
          imageUrls={item.imageUrls}
          onSelectImage={(image) =>
            dispatch({ type: 'set_selected_image', payload: image })
          }
        />
      </Container>
    </React.Fragment>
  );
};

export default ItemImagesSection;
