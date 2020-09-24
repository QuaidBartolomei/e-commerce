import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Shop from 'pages/Shop/Shop';
import React from 'react';


const GridSpacing = 1;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
    },
  })
);

const Directory = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
        <Shop />
    </Container>
  );
};

export default Directory;
