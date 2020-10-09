import Backdrop from '@material-ui/core/Backdrop';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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

const FullsizeImage = (props: {
  image: string;
  open: boolean;
  onClick: () => void;
}) => {
  const { image, open, onClick } = props;
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={open} onClick={onClick}>
      <img
        className={classes.fullSizeImage}
        src={image}
        onClick={() => onClick()}
        alt={'full size'}
      />
    </Backdrop>
  );
};

export default FullsizeImage;
