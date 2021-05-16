import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import bannerImage from './banner.jpg'

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      width: '100%',
      maxHeight: 300,
      objectFit: 'cover',
      objectPosition: 'center',
    },
    header: {
      height: 300,
      width: '100vw',
      overflow: 'hidden',
      background: ` linear-gradient(to bottom, #bdc3c790, #2c3e5090), url("${bannerImage}")`,
    },
  })
);

export default function BannerImage() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
    </div>
  );
}
