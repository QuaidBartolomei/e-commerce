import { createStyles, makeStyles } from '@material-ui/core/styles';
import logo_img from 'assets/logo.svg';
import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
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
