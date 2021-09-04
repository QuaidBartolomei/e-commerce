import Paper from '@material-ui/core/Paper';
import React from 'react';
import { theme } from 'utils/_theme';

const bannerImage = 'assets/banner.jpg';
const gradientColors: string[] = [
  theme.palette.primary.main + '91',
  theme.palette.primary.dark + 'bf',
];

const backgroundGradient = `linear-gradient(to top,
  ${gradientColors.join(',')}),
  url("${bannerImage}")`;

export default function BannerImage() {
  return (
    <Paper
      elevation={1}
      sx={{
        height: 200,
        width: '100%',
        background: backgroundGradient,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      square={true}
    ></Paper>
  );
}
