import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      overflowX: 'scroll',
      display: 'flex',
      flexDirection: 'row',
    },
  })
);

const Carousel = (props: React.PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {props.children}
    </Box>
  );
};

export default Carousel;
