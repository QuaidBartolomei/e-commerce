import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import routes from 'utils/routes';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&>*': {
        margin: theme.spacing(2, 0),
      },
    },
  })
);

const EmptyCart = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant='h5'>Cart is empty</Typography>
      <Button color='primary' variant='contained' href={routes.index}>
        Go to Shop
      </Button>
    </Container>
  );
};

export default EmptyCart;
