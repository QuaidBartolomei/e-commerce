import Container from '@material-ui/core/Container/Container';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import { Routes } from 'Router';

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(6, 0),
      bottom: 0,
      width: '100%',
      textAlign: 'center',
    },
    container: {
      display: 'flex',
      flexDireciton: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      height: 64,
    },
  })
);

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' >
      {'Copyright © '}
      <Link color='inherit' href={Routes.Homepage}>
        CAB Clothing
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Copyright />
      <Container>
        <IconButton onClick={() => window.open('http://twitter.com')}>
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={() => window.open('http://facebook.com')}>
          <FacebookIcon />
        </IconButton>
      </Container>
    </footer>
  );
};

export default Footer;
