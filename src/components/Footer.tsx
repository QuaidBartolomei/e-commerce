import { createStyles, makeStyles } from '@material-ui/core/styles';
import logo_img from 'assets/logo.svg';
import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(6, 0),
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

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  const title = 'Footer';
  const description = 'Something here to give the footer a purpose!';
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        {title}
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        {description}
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
