import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
    thumbnailImage: {
      height: 64,
      width: 64,
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

const ItemThumbnail = ({
  image,
  onClick,
}: {
  image: string;
  onClick: () => void;
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.thumbnailImage}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={onClick}
    />
  );
};

export default ItemThumbnail;
