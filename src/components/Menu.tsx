import React from 'react';
import { makeStyles } from '@material-ui/core';
import hat_img from 'assets/hat.jpg';
import jeans_img from 'assets/jeans.jpg';
import mens_img from 'assets/mens-sweaters.jpg';
import womens_img from 'assets/woman-skirt.jpg';
import shoes_img from 'assets/shoes.jpg';

interface MenuItem {
  img: string;
  title: string;
  xs?: 3 | 6;
  posY?: 'top' | 'bottom';
  tall?: boolean;
  height?: '240px';
}

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

const styles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRow: {
    flexGrow: 1,
    padding: '8px',
    height: '100vh',
  },
});
const Menu = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.topRow}>
        {topRowItems.map((item, key) => (
          <div
            key={key}
            style={{
              backgroundImage: item.img,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
