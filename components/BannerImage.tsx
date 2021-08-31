import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from 'pages/_theme';
import Paper from '@material-ui/core/Paper';

const bannerImage = 'assets/banner.jpg';
const gradientColors: string[] = [
  theme.palette.primary.main + '91',
  theme.palette.primary.dark + 'bf',
];

const backgroundGradient = `linear-gradient(to top,
  ${gradientColors.join(',')}),
  url("${bannerImage}")`;

const useStyles = makeStyles(theme =>
  createStyles({
    header: {
      height: 200,
      width: '100%',
      background: backgroundGradient,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  })
);

export default function BannerImage() {
  const classes = useStyles();
  return <Paper elevation={1} square={true} className={classes.header}></Paper>;
}
