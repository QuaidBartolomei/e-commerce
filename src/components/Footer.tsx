import { createStyles, makeStyles } from '@material-ui/core/styles';
import logo_img from 'assets/logo.svg';
import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: 'gray',
      padding: theme.spacing(1),
    },
    container: {
      display: 'flex',
      flexDireciton: 'row',
      alignItems: 'center',
    },
    logo: {
      height: 64,
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={6}>
            <img src={logo_img} className={classes.logo} alt='logo' />
          </Grid>
          <Grid item xs={6}>
            <Typography>Contact Us</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
