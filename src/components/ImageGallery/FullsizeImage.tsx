import Backdrop from '@material-ui/core/Backdrop';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  useItemDetailsState,
  useItemDetailsDispatch,
} from 'pages/ItemDetails/useItemDetails';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
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
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

const FullsizeImage = () => {
  const classes = useStyles();
  const { selectedImage, showFullSizeImage } = useItemDetailsState();
  const dispatch = useItemDetailsDispatch();

  const onClick = () => dispatch({ type: 'toggle_show_fullsize_image' });

  return (
    <Backdrop
      className={classes.backdrop}
      open={showFullSizeImage}
      onClick={onClick}
    >
      <img
        className={classes.fullSizeImage}
        src={selectedImage}
        onClick={onClick}
        alt={'full size'}
      />
    </Backdrop>
  );
};

export default FullsizeImage;
