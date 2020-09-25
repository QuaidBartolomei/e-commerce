import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
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

const FullsizeImage = (props: {
  image: string;
  visible: boolean;
  onClick: () => void;
}) => {
  const { image, visible, onClick } = props;
  const classes = useStyles();
  return (
    <Box
      className={classes.overlay}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <img
        className={classes.fullSizeImage}
        src={image}
        onClick={() => onClick()}
      />
    </Box>
  );
};

export default FullsizeImage;
