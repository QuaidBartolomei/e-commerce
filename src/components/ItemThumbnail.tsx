import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
    thumbnailImage: {
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
); 

const ItemThumbnail = ({
  image,
  onClick,
  size,
}: {
  image: string;
  onClick: () => void;
  size: number;
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.thumbnailImage}
      style={{
        backgroundImage: `url(${image})`,
        height: size,
        width: size,
      }}
      onClick={onClick}
    />
  );
};

export default ItemThumbnail;
