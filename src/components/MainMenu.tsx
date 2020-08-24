import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import hat_img from 'assets/hat.jpg';
import jeans_img from 'assets/jeans.jpg';
import mens_img from 'assets/mens-sweaters.jpg';
import womens_img from 'assets/woman-skirt.jpg';
import shoes_img from 'assets/shoes.jpg';
import { Container } from '@material-ui/core';

export interface MenuItem {
  img: string;
  title: string;
  xs?: 3 | 6;
  posY?: 'top' | 'bottom';
  tall?: boolean;
  height?: '240px';
}

const menuItems: MenuItem[] = [
  {
    img: mens_img,
    title: 'Men',
    xs: 6,
    tall: true,
  },
  {
    img: womens_img,
    title: 'Women',
    xs: 6,
    posY: 'top',
    tall: true,
  },
  {
    img: hat_img,
    title: 'Hat',
    height: '240px',
  },
  {
    img: jeans_img,
    title: 'Jeans',
    height: '240px',
  },
  {
    img: shoes_img,
    title: 'Shoes',
    height: '240px',
  },
  {
    img: shoes_img,
    title: 'Shoes',
    height: '240px',
  },
];

const topRowItems: MenuItem[] = [
  {
    img: mens_img,
    title: 'Men',
  },
  {
    img: womens_img,
    title: 'Women',
    posY: 'top',
  },
];

const bottomRowItems: MenuItem[] = [
  {
    img: hat_img,
    title: 'Hat',
  },
  {
    img: jeans_img,
    title: 'Jeans',
  },
  {
    img: shoes_img,
    title: 'Shoes',
  },
  {
    img: shoes_img,
    title: 'Shoes',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      margin: '0 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&>*': {
        margin: '8px 0',
      },
    },
    menuItem: {
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      backgroundPositionX: 'center',
      width: '100%',
      border: 'black 2px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    menuItemLabel: {
      border: 'black 2px solid',
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: '96px',
      height: '64px',
      textAlign: 'center',
      verticalAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const MainMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        style={{
          flex: 2,
          minHeight: '240px'
        }}
      >
        {topRowItems.map((item: MenuItem, i) => (
          <Grid key={i} item xs={6}>
            <Container
              fixed
              className={classes.menuItem}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPositionY: item.posY || 'center',
              }}
            >
              <div className={classes.menuItemLabel}>{item.title}</div>
            </Container>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          height: '240px',
        }}
      >
        {bottomRowItems.map((item: MenuItem, i) => (
          <Grid key={i} item xs={3}>
            <Container
              fixed
              className={classes.menuItem}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPositionY: item.posY || 'center',
              }}
            >
              <div className={classes.menuItemLabel}>{item.title}</div>
            </Container>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MainMenu;
