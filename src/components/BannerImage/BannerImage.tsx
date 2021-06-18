import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import bannerImage from './banner.jpg';
import { Paper } from '@material-ui/core';

const gradientColors: string[] = ['#7cbbe691', '#000000bf'];

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
      width: '100%',
      overflow: 'hidden',
      background: ` linear-gradient(to top, ${gradientColors.join(
        ','
      )}), url("${bannerImage}")`,
      backgroundPosition: 'center',
    },
  })
);

export default function BannerImage() {
  const classes = useStyles();
  return <Paper elevation={1} square={true} className={classes.header}></Paper>;
}
