import Paper from '@material-ui/core/Paper';
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { theme } from 'utils/_theme';
import React from 'react';

const bannerImage = 'assets/banner.jpg';
const gradientColors: string[] = [
  theme.palette.primary.main + '91',
  theme.palette.primary.dark + 'bf',
];

const backgroundGradient = `linear-gradient(to top,
  ${gradientColors.join(',')}),
  url("${bannerImage}")`;


const useStyles = makeStyles((theme: Theme) =>
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
