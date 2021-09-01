import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import createStyles from '@material-ui/styles/createStyles';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import Container from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
      '&>*': {
        margin: theme.spacing(4, 0),
      },
    },
    grid: {
      padding: theme.spacing(4, 1),
      width: '100%',
    },
  })
);

const Registration = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <RegisterForm />
    </Container>
  );
};

export default Registration;
